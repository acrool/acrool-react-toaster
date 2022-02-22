import React from 'react';
import Toaster from '../Toaster';
import {useToaster} from '../hook';
import ModalWithPortal from './ModalWithPortal';
import {elClassName} from '../config';
import '../styles.css';

const ToasterContainer = () => {
    const {timeout, items, hidden} = useToaster();

    return (
        <ModalWithPortal name="toaster">
            <div className={elClassName.modal}>
                {items.map(item => {
                    return <Toaster
                        key={item.key}
                        isVisible={true}
                        onEntered={() => hidden(item.key)}
                        message={item?.message}
                        status={item?.status}
                        timeout={timeout}
                    />
                })}
            </div>
        </ModalWithPortal>
    );
};

export default ToasterContainer;
