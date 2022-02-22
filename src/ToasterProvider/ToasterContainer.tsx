import React from 'react';
import Toaster from '../Toaster';
import {useToaster} from '../hook';
import ModalWithPortal from './ModalWithPortal';
import {elClassName} from '../config';

const ToasterContainer = () => {
    const {items, hidden} = useToaster();

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
                    />
                })}
            </div>
        </ModalWithPortal>
    );
};

export default ToasterContainer;
