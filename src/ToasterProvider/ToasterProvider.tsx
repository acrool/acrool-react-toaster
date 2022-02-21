import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {uuid} from 'bear-jsutils/key';
import ToasterContainer from './ToasterContainer';
import {IState, ToasterContextProvider} from './context';


interface IProps {
    children?: ReactNode,
}

/**
 * Provider
 * @param children
 */
const ToasterProvider = ({
    children
}: IProps) => {
    const [items, setItems] = useState<IState[]>([]);


    useEffect(() => {
        window.toaster = show;
    }, []);


    const hidden = useCallback((key: string) => {
        setItems(prev => {
            const index = prev.findIndex(row => row.key === key);
            return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
    }, []);


    const show = useCallback((newItem: Omit<IState, 'key'>) => {
        const key = uuid();
        setItems(prev => {
            return prev.concat({
                ...newItem,
                key,
            });
        });
    }, []);



    return (
        <ToasterContextProvider value={{items, show, hidden}}>
            {children}

            {/* Global Control Container */}
            <ToasterContainer/>
        </ToasterContextProvider>
    );
};



export default ToasterProvider;
