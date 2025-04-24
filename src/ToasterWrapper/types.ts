import {ReactNode} from 'react';

import {EToasterStatus} from '../types';

export interface IToasterWrapperProps {
    status?: EToasterStatus
    timeout?: number
    message: ReactNode
    isStatusIconVisible?: boolean
}
