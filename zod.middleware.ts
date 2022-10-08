import { NextFunction, Request, Response } from 'express';
import { CreateValidationError } from './error.js';
import { ZodError } from 'zod';

export function ZodErrorMiddleware () {
    return function (error: ZodError, req: Request, resp: Response, next: NextFunction) {
        if (error.constructor.name === 'ZodError') {
            next(CreateValidationError(
                'Validation error. ' +
                // @ts-ignore
                error.errors.map(m => `${m.code} (${m.path}): expected: '${m.expected}', received: '${m.received}'`)
                    .join(', ')
            ));
        } else {
            next(error);
        }
    }
}
