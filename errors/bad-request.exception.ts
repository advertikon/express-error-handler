import { BaseException } from './base.exception';

export class BadRequestException extends BaseException {
    code = 403;
}
