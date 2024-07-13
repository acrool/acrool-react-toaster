import React, {useCallback, useEffect, useState} from 'react';
import Message from './_components/Message';
import {TOnExitComplete} from '../ModalWithPortal';
import MotionDrawer from '../ModalWithPortal/MotionDrawer';
import {useCountDownTimer} from '@acrool/react-hooks';
import {IToasterProps} from './types';

interface IProps extends IToasterProps{
    onExitComplete: TOnExitComplete,
}


/**
 * 吐司
 * @param onExitComple
 * @param status
 * @param message
 * @param timeout
 */
const ToasterWrapperControl = ({
    onExitComplete,

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
        <MotionDrawer
            isVisible={isVisible}
            onExitComplete={onExitComplete}
        >
            <Message
                onClose={handleHidden}
                status={status}
            >
                {message}
            </Message>
        </MotionDrawer>
    );
};

export default ToasterWrapperControl;

