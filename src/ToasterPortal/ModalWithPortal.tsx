import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const getCreatePortal = () => ReactDOM.createPortal;

type TSelector = () => HTMLElement

function getParentElement(parentSelector: TSelector): HTMLElement {
    return parentSelector();
}

interface IProps{
    portalClassName: string,
    children: React.ReactNode,
    parentSelector: TSelector,
}

interface IState {}

/**
 * 將內容傳送到外部Body內的方法
 */
class ModalWithPortal extends React.Component<IProps, IState> {
    el: HTMLElement;
    portal?: Component;

    static defaultProps = {
        isOpen: false,
        parentSelector: () => document.body,
    };

    constructor(props: IProps) {
        super(props);
        const el = document.createElement('div');
        el.className = props.portalClassName;
        this.el = el;
    }

    componentDidMount() {
        const parent = getParentElement(this.props.parentSelector);
        if(parent){
            parent.appendChild(this.el);
        }

    }

    componentWillUnmount() {
        const parent = getParentElement(this.props.parentSelector);
        if(parent){
            parent.removeChild(this.el);
        }
    }


    portalRef = (ref: Component) => {
        this.portal = ref;
    };

    renderPortal = (): React.ReactPortal => {
        const createPortal = getCreatePortal();
        return createPortal(
            this.props.children,
            this.el,
        );
    };


    render() {
        return this.renderPortal();
    }

}

export default ModalWithPortal;
