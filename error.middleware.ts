import { Request, Response, NextFunction } from 'express';
import { BaseException } from './errors/base.exception.js';
import bunyan from 'bunyan';
import Logger from 'bunyan';

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
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ErrorMiddleware (error: Error, req :LoggerRequest, resp: LoggerResponse, next: NextFunction) {
    let code;
    let body: ResponseBody;

    if (error instanceof BaseException) {
        (req.logger ? req.logger : logger).error(error);
        code = error.code;
        body = { status: 'error', message: error.message };
    } else {
        (req.logger ? req.logger : logger).error(error);
        code = 500;
        body = { status: 'error', message: 'Internal error' };
    }

    if (resp.sentry) {
        body.error_id = resp.sentry;
    }

    resp.status(code).json(body);
}
