import VError from 'verror';
import { Response } from 'node-fetch';

export enum HTTP_ERROR {
    NOT_FOUND = 'HttpErrorNotFound',
    BAD_REQUEST = 'HttpErrorBadRequest',
    FORBIDDEN = 'HttpErrorForbidden',
    TEA_POT = 'HttpErrorTeaPot',
    UNAUTHORIZED = 'HttpErrorUnauthorized',
    UNPROCESSABLE_ENTITY = 'HttpErrorUnprocessableEntity',
    VALIDATION = 'HttpErrorValidation',
    INTERNAL_SERVER_ERROR = 'HttpErrorInternalServerError',
    BAD_GATEWAY = 'HttpErrorBadGateway',
    SERVICE_UNAVAILABLE = 'HttpErrorServiceUnavailable',
    GATEWAY_TIMEOUT = 'HttpErrorGatewayTimeout',
}

function getErrorByCode (code:  number): HTTP_ERROR {
    switch (code) {
        case 404:
            return HTTP_ERROR.NOT_FOUND;
        case 400:
            return HTTP_ERROR.BAD_REQUEST;
        case 403:
            return HTTP_ERROR.FORBIDDEN;
        case 418:
            return HTTP_ERROR.TEA_POT;
        case 401:
            return HTTP_ERROR.UNAUTHORIZED;
        case 422:
            return HTTP_ERROR.UNPROCESSABLE_ENTITY;
        case 500:
            return HTTP_ERROR.INTERNAL_SERVER_ERROR;
        case 502:
            return HTTP_ERROR.BAD_GATEWAY;
        case 503:
            return HTTP_ERROR.SERVICE_UNAVAILABLE;
        case 504:
            return HTTP_ERROR.GATEWAY_TIMEOUT;
        default:
            throw new Error(`Unsupported error code: '${code}'`);
    }
}

export async function FetchError (response: Response): Promise<VError> {
    let validationMessage = '';

    if (response.status === 400) {
        try {
            const body = await response.json();
            validationMessage = body.message;
            // eslint-disable-next-line no-empty
        }catch{}
    }

    return new VError({
        name: getErrorByCode(response.status),
        info: {
            code: response.status
        }
    }, 'Error querying %s: %s', response.url, validationMessage || response.statusText)
}

export function CreateError (name: string, message: string, info?: object, cause: Error|null = null) {
    return new VError({
        name,
        info,
        cause,
    }, message);
}

export function CreateNotFoundError (message: string, info = {}, cause?: Error): VError {
    return CreateError(HTTP_ERROR.NOT_FOUND, message, { ...info, code: 404 }, cause);
}

export function CreateBadRequestError (message: string, info = {}, cause?: Error): VError {
    return CreateError(HTTP_ERROR.BAD_REQUEST, message, { ...info, code: 400 }, cause);
}

export function CreateForbiddenError (message: string, info = {}, cause?: Error): VError {
    return CreateError(HTTP_ERROR.FORBIDDEN, message, { ...info, code: 403 }, cause);
}

export function CreateTeaPotError (message: string, info = {}, cause?: Error): VError {
    return CreateError(HTTP_ERROR.TEA_POT, message, { ...info, code: 418 }, cause);
}

export function CreateUnauthorizedError (message: string, info = {}, cause?: Error): VError {
    return CreateError(HTTP_ERROR.UNAUTHORIZED, message, { ...info, code: 401 }, cause);
}

export function CreateUnprocessedEntityError (message: string, info = {}, cause?: Error): VError {
    return CreateError(HTTP_ERROR.UNPROCESSABLE_ENTITY, message, { ...info, code: 422 }, cause);
}

export function CreateValidationError (message: string, info = {}, cause?: Error): VError {
    return CreateError(HTTP_ERROR.VALIDATION, message, { ...info, code: 400 }, cause);
}
