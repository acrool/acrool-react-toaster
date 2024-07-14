import {clsx} from 'clsx';
import CSS from 'csstype';
import React, {ReactNode} from 'react';

import {EStatus} from '../../../types';
import {themeMap} from './config';
import styles from './message.module.scss';



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
            className={clsx(styles.message, statusTheme?.elClass)}
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

