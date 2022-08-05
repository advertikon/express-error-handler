import { Request, Response, NextFunction } from 'express';
import { BaseException } from './errors/base.exception.js';
import bunyan from 'bunyan';
import Logger from 'bunyan';
import { PathParams } from 'express-serve-static-core';
import { ZodError } from 'zod';

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
}

declare interface MaybeCustomError extends Error {
    isCustom?: boolean;
}

export function ErrorMiddleware () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return function (error: MaybeCustomError, req :LoggerRequest, resp: LoggerResponse, next: NextFunction) {
        let code;
        let body: ResponseBody;

        if (error.isCustom) {
            (req.logger ? req.logger : logger).error(error, 'Error');
            code = (error as BaseException).status_code;
            body = { status: 'error', message: error.message, code };
        } else if (ZodError.name === error.constructor.name) {
            code = 400;
            body = { status: 'error', message: (error as ZodError).issues.map(i => i.message).join(', '), code };
        } else {
            (req.logger ? req.logger : logger).error(error, 'Error');
            code = 500;
            body = { status: 'error', message: 'Internal error', code };
        }

        if (resp.sentry) {
            body.error_id = resp.sentry;
        }

        resp.status(code).json(body);
    } as unknown as PathParams
}
