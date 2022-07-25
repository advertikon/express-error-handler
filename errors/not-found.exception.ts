import { BaseException } from './base.exception.js';

export class NotFoundException extends BaseException {
    status_code = 404;
    message = 'Not found';
}
