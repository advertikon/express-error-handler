import { BaseException } from './base.exception.js';

export class ValidationException extends BaseException {
    status_code = 400;
    message = 'Validation error';
}
