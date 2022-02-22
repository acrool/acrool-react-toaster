import React from 'react';
import ReactDOM from 'react-dom';


const modalRoot = document.getElementById('modal-root');

export interface IProps{
    name: string,
}

class ModalWithPortal extends React.Component<IProps, {}> {
    el: HTMLElement;
    constructor(props: IProps) {
        super(props);
        const el = document.createElement('div');
        el.setAttribute('data-name', props.name);
        this.el = el;
    }

    componentDidMount() {
        modalRoot?.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot?.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        ) as any;
    }

}

export default ModalWithPortal;
