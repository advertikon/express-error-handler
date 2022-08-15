import { BaseException } from './base.exception.js';

export class BadRequestException extends BaseException {
    status_code = 400;
    // message = 'Bad request';
}
