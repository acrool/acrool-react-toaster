import {EStatus} from '../types';

export interface IToasterProps {
    isVisible: boolean,
    status?: EStatus,
    message: string,
    timeout?: number,
}
