import { NextFunction, Response } from "express";
import bunyan from "bunyan";
import { PathParams } from "express-serve-static-core";
import VError from "verror";
import { ulid } from "ulid";
import { HTTP_ERROR } from "./error.js";
import { LoggerRequest } from "./types.js";
import { ResponseBody } from "./types.js";

const logger = bunyan.createLogger({
  name: process.env.npm_package_name as string,
});

type Options = {
  nonLogableExceptions: HTTP_ERROR[];
  defaultErrorMessage: string;
};

export function ErrorMiddleware(
  options: Options = {
    nonLogableExceptions: [
      HTTP_ERROR.FORBIDDEN,
      HTTP_ERROR.UNAUTHORIZED,
      HTTP_ERROR.VALIDATION,
    ],
    defaultErrorMessage: "",
  }
) {
  return function (
    error: Error | VError,
    req: LoggerRequest,
    resp: Response,
    next: NextFunction
  ) {
    if (error.name === "Error") {
      next(error);
      return;
    }

    const errorTrackingCode = req.req_id || ulid();
    let code = 500;
    let logable = true;

    const body = {
      status: "error",
      code,
      message: "Internal server error",
    } as ResponseBody;

    if (error.constructor.name === "VError") {
      code = VError.info(error).code;
      body.message = options.defaultErrorMessage || error.message;
      body.code = code;
      logable = !options.nonLogableExceptions.includes(
        error.name as HTTP_ERROR
      );
    }

    if (logable) {
      (req.logger ? req.logger : logger).error(error, "Error", {
        errorCode: errorTrackingCode,
      });
      body.errorTrackingCode = errorTrackingCode;
    }

    resp.status(code).json(body);
  } as unknown as PathParams;
}
