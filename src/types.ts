
export enum EStatus {
    success = 'success',
    info = 'info',
    warning = 'warning',
    error = 'error',
}

export interface IRow {
    key: string,
    status?: EStatus,
    message: string,
}

export type TShow = (newItem: Omit<IRow, 'key'>) => void;
export type TStatusShow = (newItem: Omit<IRow, 'key'|'status'>) => void;
interface TShowStatus {
    success: TStatusShow,
    warning: TStatusShow,
    info: TStatusShow,
    error: TStatusShow,
}

export type TShowMulti = TShow & TShowStatus;

export type THidden = (key: string) => void;


