import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { CreateValidationError } from './error.js';

export function ZodErrorMiddleware () {
    return function (error: Error, req: Request, resp: Response, next: NextFunction) {
        if (error instanceof ZodError) {
            next(CreateValidationError('Validation error', undefined, error));
        } else {
            next(error);
        }
    }
}
