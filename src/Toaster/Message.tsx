import React, {ReactNode} from 'react';
import CSS from 'csstype';
import {elClassName} from '../config';
import Icon from './Icon';

import {EStatus} from '../types';


const themeMap = {
    [EStatus.success]: {
        icon: Icon.success,
        elClass: elClassName.messageStatusSuccess,
    },
    [EStatus.warning]: {
        icon: Icon.warning,
        elClass: elClassName.messageStatusWarning,
    },
    [EStatus.error]: {
        icon: Icon.error,
        elClass: elClassName.messageStatusError,
    },
    [EStatus.info]: {
        icon: Icon.info,
        elClass: elClassName.messageStatusInfo,
    }
};

interface IProps {
    style?: CSS.Properties,
    className?: string,
    onClose?: () => void,
    status?: EStatus,
    children?: ReactNode,
}

/**
 * Message
 */
const Message = ({
    style,
    status,
    className,
    children,
    onClose,
}: IProps) => {

    const statusTheme = typeof status !== 'undefined'? themeMap[status]: undefined;

    return (
        <div
            className={[elClassName.message, statusTheme?.elClass].join(' ').trim()}
            style={style}
            role="alert"
        >
            {statusTheme && (
                <div className={elClassName.messageIcon}>
                    <statusTheme.icon/>
                </div>
            )}
            {children && <div className={elClassName.messageContent}>{children}</div>}
        </div>
    );
};

export default Message;

