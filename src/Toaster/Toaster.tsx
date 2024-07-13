import React, {useCallback, useEffect, useState} from 'react';
import Message from './_components/Message';
import {EStatus} from '../types';
import styles from './toaster.module.scss';
import MotionDrawer from './MotionDrawer';
import {useCountDownTimer} from '@acrool/react-hooks';

interface IProps {
    isVisible: boolean,
    onEntered: () => void,
    status?: EStatus,
    message: string,
    timeout?: number,
}


/**
 * 吐司
 * @param status
 * @param message
 * @param timeout
 */
const Toaster = ({
    status,
    message,
    timeout,
}: IProps) => {
    const [isVisible, setVisible] = useState<boolean>(true);

    const {start} = useCountDownTimer();

    useEffect(() => {
        // 如果時間到就隱藏
        start(timeout, () => setVisible(false));
    }, []);

    const handleHidden = useCallback(() => {
        setVisible(false);
    }, []);


    return (
        <MotionDrawer className={styles.animation} isVisible={isVisible}>
            <Message
                onClose={handleHidden}
                status={status}
            >
                {message}
            </Message>
        </MotionDrawer>
    );
};

export default Toaster;

