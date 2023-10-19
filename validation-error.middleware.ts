import { NextFunction, Request, Response } from 'express';
import { CreateValidationError } from './error.js';
import { ZodError } from 'zod';

type ErrorType = {
    _errors?: string[];
} & {
    [key: string]: ErrorType;
};

function ZodErrorMessage (error: ErrorType, key = '', message: string[] = []): string[] {
    const { _errors, ...rest } = error;

    if (Array.isArray(_errors) && _errors.length > 0) {
        message.push(`${key ? `${key}: ` : ''}${_errors.join(',')}`);
    }

    Object.keys(rest).forEach(k => ZodErrorMessage(rest[k], [key, k].filter(Boolean).join('.'), message));

    return message;
}

export function ValidationErrorMiddleware () {
  return function (
    error: Error | ZodError,
    req: Request,
    resp: Response,
    next: NextFunction
  ) {
    if (error.constructor.name === 'ZodError') {
      if (error instanceof ZodError) {
        next(
          CreateValidationError(
            'Validation error. ' + ZodErrorMessage(error.format() as ErrorType).join('; ')
          )
        );
      }
    } else if (error.constructor.name === 'ValidationError') {
      next(
        CreateValidationError(`Validation error: ${error.message}`, {}, error)
      );
    } else {
      next(error);
    }
  };
}
