import { BaseException } from './base.exception';

export class NotFoundException extends BaseException {
    code = 404;
}
