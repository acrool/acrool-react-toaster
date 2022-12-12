import React, {Component, Ref} from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

const getCreatePortal = () => ReactDOM.createPortal;


// const modalRoot = document.getElementById('modal-root');

type TSelector = () => HTMLElement

function getParentElement(parentSelector: TSelector): HTMLElement {
    return parentSelector();
}

interface IProps{
    portalClassName: string,
    children: JSX.Element,
    parentSelector: TSelector,
}

interface IState {
    // state types
}

class ModalWithPortal extends React.Component<IProps, IState> {
    el: HTMLElement;
    portal?: Component;

    static defaultProps = {
        isOpen: false,
        portalClassName: 'bear-react-toaster-portal',
        parentSelector: () => document.body,
    };

    constructor(props: IProps) {
        super(props);
        const el = document.createElement('div');
        el.setAttribute('data-name', props.portalClassName);
        this.el = el;
    }

    componentDidMount() {
        const parent = getParentElement(this.props.parentSelector);
        if(parent){
            parent.appendChild(this.el);
            // this.renderPortal();
        }

    }

    componentWillUnmount() {
        const parent = getParentElement(this.props.parentSelector);
        if(parent){
            parent.removeChild(this.el);
        }

    }

    // getSnapshotBeforeUpdate(prevProps: IProps) {
    //     const prevParent = getParentElement(prevProps.parentSelector);
    //     const nextParent = getParentElement(this.props.parentSelector);
    //     return { prevParent, nextParent };
    // }
    //
    //
    // componentDidUpdate(prevProps: IProps, _, snapshot: { prevParent: IProps, nextParent: IProps }) {
    //     const { isOpen, portalClassName } = this.props;
    //
    //     if (prevProps.portalClassName !== portalClassName) {
    //         this.el.className = portalClassName;
    //     }
    //
    //     const { prevParent, nextParent } = snapshot;
    //     if (nextParent !== prevParent) {
    //         prevParent.removeChild(this.el);
    //         nextParent.appendChild(this.el);
    //     }
    //
    //     // Stop unnecessary renders if modal is remaining closed
    //     if (!prevProps.isOpen && !isOpen) return;
    //
    //     !isReact16 && this.renderPortal(this.props);
    // }


    portalRef = (ref: Component) => {
        this.portal = ref;
    };

    renderPortal = (): React.ReactPortal => {
        const createPortal = getCreatePortal();
        return createPortal(
            this.props.children,
            this.el,
        );
        // const root = createPortal(this.el);
        // root.render(this.props.children);
    };


    render() {
        return this.renderPortal();
    }

}

export default ModalWithPortal;