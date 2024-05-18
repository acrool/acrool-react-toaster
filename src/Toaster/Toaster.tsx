import React, {useCallback, useEffect, useState} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Message from './Message';
import {EStatus} from '../types';
import styles from './toaster.module.scss';

interface IProps {
    isVisible: boolean,
    onEntered: () => void,
    status?: EStatus,
    message: string,
    timeout?: number,
}


const Toaster = ({
    onEntered = () => {},
    status,
    message,
    timeout,
}: IProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    const handleHidden = useCallback(() => {
        setVisible(false);
    }, []);


    return (
        <CSSTransition
            in={visible}
            timeout={timeout ? timeout : 3000}

            classNames={{
                enter: styles.alertEnter,
                enterActive: styles.alertEnterActive,
                exit: styles.alertExit,
                exitActive: styles.alertExitActive,
            }}

            // unmountOnExit
            // onEnter={() => setShowButton(false)}
            onExited={onEntered}
            // onEntered={onEntered}
            onEntered={handleHidden}
        >
            <div className={styles.animation} onClick={handleHidden}>
                <Message status={status}>{message}</Message>
            </div>
        </CSSTransition>
    );
};

export default Toaster;

