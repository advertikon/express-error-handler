import { BaseException } from './base.exception';

export class UnprocessableEntityException extends BaseException {
    code = 422;
}
