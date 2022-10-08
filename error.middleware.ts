import { NextFunction, Request, Response } from 'express';
import bunyan from 'bunyan';
import Logger from 'bunyan';
import { PathParams } from 'express-serve-static-core';
import VError from 'verror';
import { ulid } from 'ulid';
import {ValidationError} from 'yup';

const logger = bunyan.createLogger({ name: process.env.npm_package_name as string });

declare interface LoggerRequest extends Request {
    logger: Logger
}

declare interface LoggerResponse extends Response {
    sentry: string;
}

declare interface ResponseBody {
    status: string;
    message: string;
    error_id?: string;
    code: number;
    errorTrackingCode: string;
}

export function ErrorMiddleware () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return function (error: Error|VError|ValidationError, req :LoggerRequest, resp: LoggerResponse, next: NextFunction) {
        const errorTrackingCode = ulid();
        let code = 500;

        const body: ResponseBody = {
            status: 'error',
            errorTrackingCode,
            code,
            message: 'Internal server error'
        };

        (req.logger ? req.logger : logger).error(error, 'Error', { errorCode: errorTrackingCode });

        if (['VError', 'ValidationError'].includes(error.constructor.name)) {
            code = VError.info(error).code;
            body.message = error.message;
            body.code = code;
        }

        if (resp.sentry) {
            body.error_id = resp.sentry;
        }

        resp.status(code).json(body);
    } as unknown as PathParams
}

