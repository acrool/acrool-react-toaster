import React from 'react';
import {uuid} from 'bear-jsutils/key';
import {removeByIndex} from 'bear-jsutils/array';
import {EStatus, IItem, THidden, TShow, TShowMulti} from '../typings';
import ModalWithPortal from './ModalWithPortal';
import {elClassName} from '../config';
import Toaster from '../Toaster';
import '../styles.css';


interface IState {
    items: IItem[],
}
interface IProps {
    timeout?: number,
}

/**
 * Global var
 */
export let toast: TShowMulti;


/**
 * ToasterPortal
 */
class ToasterPortal extends React.Component<IProps, IState> {
    static defaultProps = {
    };
    state: IState = {
        items: [],
    };

    constructor(props: IProps) {
        super(props);

        // set global
        toast = this._show as TShowMulti;
        toast.success = (item) => this._show({...item, status: EStatus.success});
        toast.warning = (item) => this._show({...item, status: EStatus.warning});
        toast.error = (item) => this._show({...item, status: EStatus.error});
        toast.info = (item) => this._show({...item, status: EStatus.info});
    }


    _show: TShow = (newItem) => {
        const key = uuid();
        this.setState((prev) => {
            const items = prev.items.concat({
                ...newItem,
                key,
            });
            return {
                items
            };
        });
    };

    _hidden: THidden = (key) => {
        this.setState((prev) => {
            const index = prev.items.findIndex(row => row.key === key);
            return {
                items: removeByIndex(prev.items, index),
            };
        });
    };

    renderItems = () => {
        const {items} = this.state;
        const {timeout} = this.props;
        return items.map(item => {
            return <Toaster
                key={item.key}
                isVisible={true}
                onEntered={() => this._hidden(item.key)}
                message={item?.message}
                status={item?.status}
                timeout={timeout}
            />;
        });
    };

    render() {
        return <ModalWithPortal portalClassName={elClassName.portal}>
            {this.renderItems()}
        </ModalWithPortal>;
    }
}


export default ToasterPortal;
