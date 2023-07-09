import { NextFunction, Request, Response } from 'express';
import bunyan from 'bunyan';
import Logger from 'bunyan';
import { PathParams } from 'express-serve-static-core';
import VError from 'verror';
import { ulid } from 'ulid';
import { HTTP_ERROR } from './error.js';

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
    return function (
        error: Error|VError,
        req :LoggerRequest,
        resp: LoggerResponse,
        next: NextFunction
    ) {
        const errorTrackingCode = req.get('x-req-id') || ulid();
        let code = 500;
        let logable = true;

        const body = {
            status: 'error',
            code,
            message: 'Internal server error'
        } as ResponseBody;

        if (error.constructor.name === 'VError') {
            code = VError.info(error).code;
            body.message = error.message;
            body.code = code;
            logable = ![
                HTTP_ERROR.FORBIDDEN,
                HTTP_ERROR.UNAUTHORIZED,
                HTTP_ERROR.VALIDATION,
            ].includes(error.name as HTTP_ERROR);
        }

        if (logable) {
            (req.logger ? req.logger : logger).error(error, 'Error', { errorCode: errorTrackingCode });
            body.errorTrackingCode = errorTrackingCode;
        }

        resp.status(code).json(body);
    } as unknown as PathParams
}

