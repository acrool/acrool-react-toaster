import {ReactNode} from 'react';
import CSS from 'csstype';
import styled from 'styled-components/macro';
import React, {useState} from 'react';

import {EStatus} from '../typings';

const IconMap = {
    [EStatus.success]: 'checked',
    [EStatus.info]: 'info',
    [EStatus.warning]: 'warning',
    [EStatus.error]: 'times-alt',
};

interface IProps {
    style?: CSS.Properties,
    className?: string,
    onClose?: () => void,
    status?: EStatus,
    children?: ReactNode,
}

/**
 * Message
 */
const Message = ({
    style,
    status,
    className,
    children,
    onClose,
}: IProps) => {
    return (
        <MessageRoot
            role="alert" className="message-root" style={style} onClick={onClose}>
            {/*{status && (*/}
            {/*     <StatusIcon code={IconMap[status]} size={20} color="#fff"/>*/}
            {/*)}*/}
            {children && <Content className="content">{children}</Content>}
        </MessageRoot>
    );
};

export default Message;

const Content = styled.div`

`;


// const StatusIcon = styled.div`
//   margin-right: 5px;
// `;

const MessageRoot = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: #55a532;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  width: auto;
  margin: 0 auto;

`;
