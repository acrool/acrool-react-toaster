
export enum EStatus {
    success = 'success',
    info = 'info',
    warning = 'warning',
    error = 'error',
}

export interface IItem {
    key: string,
    status?: EStatus,
    message: string,
}

export type TShow = (newItem: Omit<IItem, 'key'>) => void;
export type TStatusShow = (newItem: Omit<IItem, 'key'|'status'>) => void;
interface TShowStatus {
    success: TStatusShow,
    warning: TStatusShow,
    info: TStatusShow,
    error: TStatusShow,
}

export type TShowMulti = TShow & TShowStatus;

export type THidden = (key: string) => void;

