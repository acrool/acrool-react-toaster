import {useCountDownTimer} from '@acrool/react-hooks';
import {clsx} from 'clsx';
import React, {useEffect} from 'react';

import {themeMap} from './config';
import styles from './toaster-wrapper.module.scss';
import {IToasterWrapperProps} from './types';



interface IProps extends IToasterWrapperProps{
    onClose?: () => void,
}

/**
 * Message
 */
const ToasterWrapper = ({
    onClose,
    status,
    message,
    timeout,
}: IProps) => {
    const statusTheme = typeof status !== 'undefined'? themeMap[status]: undefined;
    
    const {start} = useCountDownTimer();

    useEffect(() => {
        // 如果時間到就隱藏
        start(timeout).then(onClose);
    }, []);


    return (
        <div
            onClick={onClose}
            className={clsx(styles.toasterWrapper, statusTheme?.elClass)}
            role="alert"
        >
            {statusTheme && (
                <div className={styles.icon}>
                    <statusTheme.icon/>
                </div>
            )}
            {message && <div className={styles.content}>{message}</div>}
        </div>
    );
};

export default ToasterWrapper;

