import {useCountDownTimer} from '@acrool/react-hooks/time';
import {clsx} from 'clsx';
import React, {FunctionComponent, useEffect} from 'react';

import styles from './toaster-wrapper.module.scss';
import {IToasterWrapperProps} from './types';



interface IProps extends Exclude<IToasterWrapperProps, 'status'>{
    className?: string
    icon?: FunctionComponent
    onClose?: () => void
}

/**
 * Message
 */
const ToasterWrapper = ({
    className,
    onClose,
    message,
    timeout,
    icon,
    isStatusIconVisible = true,
}: IProps) => {

    const {start} = useCountDownTimer();

    useEffect(() => {
        // 如果時間到就隱藏
        if(timeout){
            start(timeout).then(onClose);
        }
    }, []);

    const IconSvg = icon as FunctionComponent;

    return (
        <div
            onClick={onClose}
            className={clsx(styles.toasterWrapper, className)}
            role="alert"
        >
            {isStatusIconVisible && icon && (
                <div className={styles.icon}>
                    <IconSvg/>
                </div>
            )}
            {message && <div className={styles.content}>{message}</div>}
        </div>
    );
};

export default ToasterWrapper;

