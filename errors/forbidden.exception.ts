import { BaseException } from './base.exception.js';

export class ForbiddenException extends BaseException {
    code = 403;
}
