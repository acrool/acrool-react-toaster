import React, {useCallback, useEffect, useState} from 'react';
import Message from './Message';
import {EStatus} from '../types';
import styles from './toaster.module.scss';
import MotionDrawer from './MotionDrawer';
import {EVisible} from './types';
import {useCountDownTimer} from '@acrool/react-hooks';

interface IProps {
    isVisible: boolean,
    onEntered: () => void,
    status?: EStatus,
    message: string,
    timeout?: number,
}



const Toaster = ({
    status,
    message,
    timeout,
}: IProps) => {
    const [visible, setVisible] = useState<EVisible>(EVisible.visible);

    const {start} = useCountDownTimer();

    useEffect(() => {
        start(timeout, () => setVisible(EVisible.hiddenAction));
    }, []);

    const handleHidden = useCallback(() => {
        setVisible(EVisible.hidden);
    }, []);

    const handleHiddenAction = useCallback(() => {
        setVisible(EVisible.hiddenAction);
    }, []);


    if(visible === EVisible.hidden){
        return null;
    }

    return (
        <MotionDrawer className={styles.animation} visible={visible} onExitComplete={handleHidden}>
            <Message status={status} onClose={handleHiddenAction}>{message}</Message>
        </MotionDrawer>
    );
};

export default Toaster;

