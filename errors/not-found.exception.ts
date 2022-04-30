import { BaseException } from './base.exception.js';

export class NotFoundException extends BaseException {
    code = 404;
}
