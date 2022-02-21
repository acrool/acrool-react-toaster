import React from 'react';
import styled from 'styled-components/macro';


// Configs

import Toaster from '../Toaster';
import {useToaster} from '../hook';
import ModalWithPortal from './ModalWithPortal';

const ToasterContainer = () => {
    const {items, hidden} = useToaster();

    return (
        <ModalWithPortal name="toaster">
            <CustomModal className="custom-modal">
                {items.map(item => {
                    return <Toaster
                        key={item.key}
                        isVisible={true}
                        onEntered={() => hidden(item.key)}
                        message={item?.message}
                        status={item?.status}
                    />
                })}
            </CustomModal>
        </ModalWithPortal>
    );
};

export default ToasterContainer;



const CustomModal = styled.div`
    position: fixed;
    top: 20px;
    margin: 0 auto;
    text-align: center;
    z-index: 50;

    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
`;

