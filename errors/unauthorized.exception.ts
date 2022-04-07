import { BaseException } from './base.exception';

export class UnauthorizedException extends BaseException {
    code = 401;
}
