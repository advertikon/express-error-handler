export abstract class BaseException extends Error {
    abstract status_code: number;
    abstract message: string;
}
