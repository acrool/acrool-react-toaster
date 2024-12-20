import {useCountDownTimer} from '@acrool/react-hooks/time';
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
    isStatusIconVisible = true,
}: IProps) => {
    const statusTheme = typeof status !== 'undefined'? themeMap[status]: undefined;
    
    const {start} = useCountDownTimer();

    useEffect(() => {
        // 如果時間到就隱藏
        if(timeout){
            start(timeout).then(onClose);
        }
    }, []);


    return (
        <div
            onClick={onClose}
            className={clsx(styles.toasterWrapper, statusTheme?.elClass)}
            role="alert"
        >
            {isStatusIconVisible && statusTheme && (
                <div className={styles.icon}>
                    <statusTheme.icon/>
                </div>
            )}
            {message && <div className={styles.content}>{message}</div>}
        </div>
    );
};

export default ToasterWrapper;

