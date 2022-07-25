import { BaseException } from './base.exception.js';

export class TeaPotException extends BaseException {
    status_code = 418;
    message = 'I am a tea pot';
}
