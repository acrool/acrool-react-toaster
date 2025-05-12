import {FunctionComponent, ReactNode, SVGProps} from 'react';

import SvgError from './assets/error.svg?react';
import SvgInfo from './assets/info.svg?react';
import SvgSuccess from './assets/success.svg?react';
import SvgWarning from './assets/warning.svg?react';
import styles from './ToasterWrapper/toaster-wrapper.module.scss';
import {EToasterStatus} from './types';

export interface IStatusConfig {
    icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>
    className: string
}

export type TThemeMap = Record<EToasterStatus, IStatusConfig>;

export const themeMap: Record<EToasterStatus, IStatusConfig> = {
    [EToasterStatus.success]: {
        icon: SvgSuccess,
        className: styles.statusSuccess,
    },
    [EToasterStatus.warning]: {
        icon: SvgWarning,
        className: styles.statusWarning,
    },
    [EToasterStatus.error]: {
        icon: SvgError,
        className: styles.statusError,
    },
    [EToasterStatus.info]: {
        icon: SvgInfo,
        className: styles.statusInfo,
    }
};
