import makeDebugger from 'debug';
import { Request, Response, NextFunction } from 'express';
import { BaseException } from './errors/base.exception';

export const Debugger = makeDebugger('Error');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ErrorMiddleware (error: Error, req :Request, resp: Response, next: NextFunction) {
    if (error instanceof BaseException) {
        Debugger(error.message);
        resp.status(error.code).json({ status: 'error', message: error.message });
    } else {
        Debugger(error);
        resp.status(500).json({ status: 'error', message: 'Internal error' });
    }
}
