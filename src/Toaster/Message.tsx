import React, {ReactNode} from 'react';
import CSS from 'csstype';
import styled from 'styled-components/macro';
import cx from 'classnames';
import elClassName from '../el-class-name';

import {EStatus} from '../typings';

const IconMap = {
    [EStatus.success]: 'checked',
    [EStatus.info]: 'info',
    [EStatus.warning]: 'warning',
    [EStatus.error]: 'times-alt',
};

const classMap = {
    [EStatus.success]: elClassName.messageStatusSuccess,
    [EStatus.warning]: elClassName.messageStatusWarning,
    [EStatus.error]: elClassName.messageStatusError,
    [EStatus.info]: elClassName.messageStatusInfo,
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

   const statusClassName = typeof status !== 'undefined'? classMap[status]: '';

    return (
        <div
            className={cx(elClassName.message, statusClassName)}
            style={style}
            role="alert"
            onClick={onClose}
        >
            {/*{status && (*/}
            {/*     <StatusIcon code={IconMap[status]} size={20} color="#fff"/>*/}
            {/*)}*/}
            {children && <Content className="bear-carousel__content">{children}</Content>}
        </div>
    );
};

export default Message;

const Content = styled.div`

`;


// const StatusIcon = styled.div`
//   margin-right: 5px;
// `;
//
// const MessageRoot = styled.button`
//   display: inline-flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//
//   background: #55a532;
//   padding: 10px;
//   color: #fff;
//   border-radius: 5px;
//   width: auto;
//   margin: 0 auto;
//
// `;
