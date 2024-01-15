import Logger from 'bunyan';
import { Request } from 'express';

export declare interface LoggerRequest extends Request {
  logger: Logger;
  req_id: string;
}export declare interface ResponseBody {
    status: string;
    message: string;
    error_id?: string;
    code: number;
    errorTrackingCode: string;
}

