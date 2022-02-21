import React, {useEffect, useState} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from 'styled-components/macro';
import Message from './Message';
import {EStatus} from '../typings';

interface IProps {
    isVisible: boolean,
    onEntered: () => void,
    status?: EStatus,
    message: string,
}

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
            timeout={3000}

            classNames="alert"
            // unmountOnExit
            // onEnter={() => setShowButton(false)}
            onExited={() => onEntered()}
            // onEntered={onEntered}
            onEntered={() => setVisible(false)}
        >
            <CustomAnimations className="custom-animations">
                <Message status={status}>{message}</Message>
            </CustomAnimations>
        </CSSTransition>
    );
};

export default Toaster;


const CustomAnimations = styled.div`
    //position: fixed;
    //top: 20px;
    //right: 0;
    //left: 0;
    //margin: 0 auto;
    //text-align: center;
    //z-index: 50;
    overflow: hidden;
    transition: opacity .4s, transform .4s, height .4s, margin-bottom .4s;

    opacity: 0;
    margin-bottom: 0;
    height: 42px;

    &.alert-enter{
        opacity: 0;
    }

    &.alert-enter-active{
        opacity: 1;
        transform: translateY(10px);
        margin-bottom: 8px;
    }
    //&.alert-enter-done{
    //    opacity: 0;
    //    color: red;
    //}
    &.alert-exit-active{
        transform: translateY(0);
        height: 0;
        opacity: 0;
        margin-bottom: 0;
    }

`;
