import { BaseException } from './base.exception.js';

export class UnprocessableEntityException extends BaseException {
    status_code = 422;
    message = 'Unprocessed entity';
}
