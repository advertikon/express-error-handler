import { BaseException } from './base.exception.js';

export class BadRequestException extends BaseException {
    code = 403;
}
