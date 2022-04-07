import { BaseException } from './base.exception';

export class ForbiddenException extends BaseException {
    code = 403;
}
