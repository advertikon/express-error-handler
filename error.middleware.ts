import { Request, Response, NextFunction } from 'express';
import { BaseException } from './errors/base.exception.js';
import bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: process.env.npm_package_name as string });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ErrorMiddleware (error: Error, req :Request, resp: Response, next: NextFunction) {
    if (error instanceof BaseException) {
        // @ts-ignore
        (req.loger ? req.loger : logger).error(error);
        resp.status(error.code).json({ status: 'error', message: error.message });
    } else {
        // @ts-ignore
        (req.loger ? req.loger : logger).error(error);
        resp.status(500).json({ status: 'error', message: 'Internal error' });
    }
}
