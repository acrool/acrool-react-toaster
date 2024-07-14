import {EStatus} from '../types';

export interface IToasterWrapperProps {
    status?: EStatus
    timeout?: number
    message: string
}
