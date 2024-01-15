/* eslint-disable @typescript-eslint/no-unused-vars */
import bunyan from 'bunyan';
import { Response, NextFunction } from 'express';
import { LoggerRequest, ResponseBody } from './types';
import { ulid } from 'ulid';

const logger = bunyan.createLogger({
  name: process.env.npm_package_name as string,
});

export async function CatchAllMiddleware (
  error: Error,
  req: LoggerRequest,
  resp: Response,
  next: NextFunction
) {
  const errorTrackingCode = req.req_id || ulid();
  const code = 500;

  const body = {
    status: 'error',
    code,
    message: 'Internal server error',
  } as ResponseBody;

  (req.logger ? req.logger : logger).error(error, 'Unhandled Error', {
    errorCode: errorTrackingCode,
  });
  body.errorTrackingCode = errorTrackingCode;

  resp.status(code).json(body);
}
