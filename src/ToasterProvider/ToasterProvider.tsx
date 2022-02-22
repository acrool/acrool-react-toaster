import React, {ReactNode} from 'react';
import {uuid} from 'bear-jsutils/key';
import {removeByIndex} from 'bear-jsutils/array';
import ToasterContainer from './ToasterContainer';
import {ToasterContextProvider} from './context';
import {EStatus, IItem, THidden, TShow, TShowMulti} from '../typings';


interface IState {
    items: IItem[],
}
interface IProps {
    timeout?: number,
    children?: ReactNode,
}

/**
 * Global var
 */
export let toast: TShowMulti;


/**
 * Provider
 * @param children
 */
class ToasterProvider extends React.Component<IProps, IState> {
    static defaultProps = {
    };
    state = {
        items: [],
    };

    constructor(props: IProps) {
        super(props);

        // set global
        toast = this.show as TShowMulti;
        toast.success = (item) => this.show({...item, status: EStatus.success});
        toast.warning = (item) => this.show({...item, status: EStatus.warning});
        toast.error = (item) => this.show({...item, status: EStatus.error});
        toast.info = (item) => this.show({...item, status: EStatus.info});
    }


    show: TShow = (newItem) => {
        const key = uuid();
        this.setState((prev) => {
            const items = prev.items.concat({
                ...newItem,
                key,
            });
            return {
                items
            }
        });
    };

    hidden: THidden = (key) => {
        this.setState((prev) => {
            const index = prev.items.findIndex(row => row.key === key);
            return {
                items: removeByIndex(prev.items, index),
            }
        });
    };


    render() {
        const {children, timeout} = this.props;
        const {items} = this.state;

        return <ToasterContextProvider value={{timeout, items, toaster: toast, hidden: this.hidden}}>
            {children}

            {/* Global Control Container */}
            <ToasterContainer/>
        </ToasterContextProvider>
    }
}


export default ToasterProvider;
