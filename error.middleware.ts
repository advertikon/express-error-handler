import { Request, Response, NextFunction } from 'express';
import { BaseException } from './errors/base.exception.js';
import bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: process.env.npm_package_name as string });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ErrorMiddleware (error: Error, req :Request, resp: Response, next: NextFunction) {
    let code;
    let body;

    if (error instanceof BaseException) {
        // @ts-ignore
        (req.loger ? req.loger : logger).error(error);
        code = error.code;
        body = { status: 'error', message: error.message };
    } else {
        // @ts-ignore
        (req.loger ? req.loger : logger).error(error);
        code = 500;
        body = { status: 'error', message: 'Internal error' };
    }

    // @ts-ignore
    if (resp.sentry) {
        // @ts-ignore
        body.error_id = resp.sentry;
    }

    resp.status(code).json(body);
}
