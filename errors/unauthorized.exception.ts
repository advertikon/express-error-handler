import { BaseException } from './base.exception.js';

export class UnauthorizedException extends BaseException {
    code = 401;
}
