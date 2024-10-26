import {FunctionComponent, SVGProps} from 'react';

import SvgError from '../assets/error.svg?react';
import SvgInfo from '../assets/info.svg?react';
import SvgSuccess from '../assets/success.svg?react';
import SvgWarning from '../assets/warning.svg?react';
import {EToasterStatus} from '../types';
import styles from './toaster-wrapper.module.scss';

interface IStatusConfig {
    icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string; }>,
    elClass: string,
}


export const themeMap: Record<EToasterStatus, IStatusConfig> = {
    [EToasterStatus.success]: {
        icon: SvgSuccess,
        elClass: styles.statusSuccess,
    },
    [EToasterStatus.warning]: {
        icon: SvgWarning,
        elClass: styles.statusWarning,
    },
    [EToasterStatus.error]: {
        icon: SvgError,
        elClass: styles.statusError,
    },
    [EToasterStatus.info]: {
        icon: SvgInfo,
        elClass: styles.statusInfo,
    }
};
