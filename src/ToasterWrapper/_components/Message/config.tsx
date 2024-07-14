import {FunctionComponent, SVGProps} from 'react';

import SvgError from '../../../assets/error.svg?react';
import SvgInfo from '../../../assets/info.svg?react';
import SvgSuccess from '../../../assets/success.svg?react';
import SvgWarning from '../../../assets/warning.svg?react';
import {EStatus} from '../../../types';
import styles from './message.module.scss';

interface IStatusConfig {
    icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string; }>,
    elClass: string,
}


export const themeMap: Record<EStatus, IStatusConfig> = {
    [EStatus.success]: {
        icon: SvgSuccess,
        elClass: styles.statusSuccess,
    },
    [EStatus.warning]: {
        icon: SvgWarning,
        elClass: styles.statusWarning,
    },
    [EStatus.error]: {
        icon: SvgError,
        elClass: styles.statusError,
    },
    [EStatus.info]: {
        icon: SvgInfo,
        elClass: styles.statusInfo,
    }
};
