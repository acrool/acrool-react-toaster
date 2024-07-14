import {IToasterWrapperProps} from './ToasterWrapper';

export enum EStatus {
    success = 'success',
    info = 'info',
    warning = 'warning',
    error = 'error',
}

export interface IRow extends IToasterWrapperProps{
    queueKey: string,
}

export type TShow = (newItem: Omit<IRow, 'queueKey'>) => void;
export type TStatusShow = (newItem: Omit<IRow, 'queueKey'|'status'>) => void;
interface TShowStatus {
    success: TStatusShow,
    warning: TStatusShow,
    info: TStatusShow,
    error: TStatusShow,
}

export type TShowMulti = TShow & TShowStatus;

export type THidden = (key: string) => void;


export interface IToasterProps {
    id?: string
    defaultTimeout?: number
}
