import { BaseException } from './base.exception.js';

export class UnauthorizedException extends BaseException {
    status_code = 401;
    message = 'Unauthorized';
}
