import { BaseException } from './base.exception.js';

export class ForbiddenException extends BaseException {
    status_code = 403;
    message = 'Forbidden';
}
