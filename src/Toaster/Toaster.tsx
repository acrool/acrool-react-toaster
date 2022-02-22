import React, {useEffect, useState} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Message from './Message';
import {EStatus} from '../typings';
import {elClassName} from '../config';

interface IProps {
    isVisible: boolean,
    onEntered: () => void,
    status?: EStatus,
    message: string,
}

const timeout = 3000;

const Toaster = ({
    isVisible = false,
    onEntered = () => {},
    status,
    message,
}: IProps) => {
    const [visible, setVisible] = useState(false);
    // const [showMessage, setShowMessage] = useState(false);
    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <CSSTransition
            in={visible}
            timeout={timeout}

            classNames="alert"
            // unmountOnExit
            // onEnter={() => setShowButton(false)}
            onExited={() => onEntered()}
            // onEntered={onEntered}
            onEntered={() => setVisible(false)}
        >
            <div className={elClassName.messageAnimation}>
                <Message status={status}>{message}</Message>
            </div>
        </CSSTransition>
    );
};

export default Toaster;

