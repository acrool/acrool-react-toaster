import {IToasterWrapperProps} from './ToasterWrapper';

export enum EToasterStatus {
    success = 'success',
    info = 'info',
    warning = 'warning',
    error = 'error',
}

export interface IRow extends IToasterWrapperProps{
    queueKey: string,
}

export type TShow = (newRow: Omit<IRow, 'queueKey'>) => void;
export type TStatusShow = (message: string, options?: Omit<IRow, 'message'|'queueKey'|'status'>) => void;
interface TShowStatus {
    success: TStatusShow,
    warning: TStatusShow,
    info: TStatusShow,
    error: TStatusShow,
}

export type TShowMulti = TShow & TShowStatus;
export interface IToaster extends TShow, TShowStatus{}

export type THide = (key: string) => void;


export interface IToasterProps {
    id?: string
    defaultTimeout?: number
    containerSelector?: () => HTMLElement | null;
    position?: {
        vertical?: 'top'|'bottom'
        horizontal?: 'left'|'center'|'right',
    };
}
