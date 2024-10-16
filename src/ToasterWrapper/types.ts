import {EToasterStatus} from '../types';

export interface IToasterWrapperProps {
    status?: EToasterStatus
    timeout?: number
    message: string
}
