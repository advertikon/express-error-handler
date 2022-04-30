import { BaseException } from './base.exception.js';

export class UnprocessableEntityException extends BaseException {
    code = 422;
}
