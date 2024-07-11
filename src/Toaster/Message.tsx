import React, {ReactNode} from 'react';
import CSS from 'csstype';
import Icon from './Icon';
import styles from './toaster.module.scss';

import {EStatus} from '../types';


const themeMap = {
    [EStatus.success]: {
        icon: Icon.success,
        elClass: styles.statusSuccess,
    },
    [EStatus.warning]: {
        icon: Icon.warning,
        elClass: styles.statusWarning,
    },
    [EStatus.danger]: {
        icon: Icon.danger,
        elClass: styles.statusDanger,
    },
    [EStatus.info]: {
        icon: Icon.info,
        elClass: styles.statusInfo,
    }
};

interface IProps {
    style?: CSS.Properties,
    onClose?: () => void,
    status?: EStatus,
    children?: ReactNode,
}

/**
 * Message
 */
const Message = ({
    style,
    onClose,
    status,
    children,
}: IProps) => {
    const statusTheme = typeof status !== 'undefined'? themeMap[status]: undefined;

    return (
        <div
            onClick={onClose}
            className={[styles.message, statusTheme?.elClass].join(' ').trim()}
            style={style}
            role="alert"
        >
            {statusTheme && (
                <div className={styles.icon}>
                    <statusTheme.icon/>
                </div>
            )}
            {children && <div className={styles.content}>{children}</div>}
        </div>
    );
};

export default Message;

