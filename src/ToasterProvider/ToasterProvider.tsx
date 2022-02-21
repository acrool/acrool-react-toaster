import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {uuid} from 'bear-jsutils/key';
import {removeByIndex} from 'bear-jsutils/array';
import ToasterContainer from './ToasterContainer';
import {ToasterContextProvider} from './context';
import {EStatus, IItem, TShow, TShowMulti} from '../typings';


interface IState {
    items: IItem[],
}
interface IProps {
    children?: ReactNode,
}

export let toast: TShowMulti;

/**
 * Provider
 * @param children
 */
// const ToasterProvider = ({
//     children
// }: IProps) => {
//     const [items, setItems] = useState<IState[]>([]);
//
//
//     useEffect(() => {
//         toast = show as TShowMulti;
//         toast.success = (item) => show({...item, status: EStatus.success});
//         toast.warning = (item) => show({...item, status: EStatus.warning});
//         toast.error = (item) => show({...item, status: EStatus.error});
//         toast.info = (item) => show({...item, status: EStatus.info});
//     }, []);
//
//
//     const hidden = useCallback((key: string) => {
//         setItems(prev => {
//             const index = prev.findIndex(row => row.key === key);
//             return [...prev.slice(0, index), ...prev.slice(index + 1)];
//         });
//     }, []);
//
//
//     const show = useCallback((newItem: Omit<IState, 'key'>) => {
//         const key = uuid();
//         setItems(prev => {
//             return prev.concat({
//                 ...newItem,
//                 key,
//             });
//         });
//     }, []);
//
//
//
//
//     return (
//         <ToasterContextProvider value={{items, toaster: toast, hidden}}>
//             {children}
//
//             {/* Global Control Container */}
//             <ToasterContainer/>
//         </ToasterContextProvider>
//     );
// };


/**
 * Provider
 * @param children
 */
class ToasterProvider extends React.Component<IProps, IState> {
    static defaultProps = {};
    state = {
        items: [],
    };

    constructor(props: IProps) {
        super(props);

        toast = this.show as TShowMulti;
        toast.success = (item) => this.show({...item, status: EStatus.success});
        toast.warning = (item) => this.show({...item, status: EStatus.warning});
        toast.error = (item) => this.show({...item, status: EStatus.error});
        toast.info = (item) => this.show({...item, status: EStatus.info});
    }


    show = (newItem: Omit<IItem, 'key'>) => {
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

    hidden = (key: string) => {
        this.setState((prev) => {
            const index = prev.items.findIndex(row => row.key === key);
            return {
                items: removeByIndex(prev.items, index),
            }
        });
    };


    render() {
        const {children} = this.props;
        const {items} = this.state;

        return <ToasterContextProvider value={{items, toaster: toast, hidden: this.hidden}}>
            {children}

            {/* Global Control Container */}
            <ToasterContainer/>
        </ToasterContextProvider>
    }
}


export default ToasterProvider;
