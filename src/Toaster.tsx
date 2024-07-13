import React, {useCallback, useEffect, useState} from 'react';
import {ulid} from 'ulid';
import {removeByIndex} from './utils';
import {EStatus, IItem, THidden, TShow, TShowMulti} from './types';
import ModalWithPortal from './ModalWithPortal';
import {IToasterPortalProps} from './types';
import {defaultTimeout, rootId} from './config';
import ToasterMessageControl from './ToasterMessage';


/**
 * Global var
 */
export let toast: TShowMulti;

const Toaster: React.FC<IToasterPortalProps> = (props) => {
    const [items, setItems] = useState<IItem[]>([]);

    // set global
    useEffect(() => {
        toast = show as TShowMulti;
        toast.success = (item) => show({...item, status: EStatus.success});
        toast.warning = (item) => show({...item, status: EStatus.warning});
        toast.error = (item) => show({...item, status: EStatus.error});
        toast.info = (item) => show({...item, status: EStatus.info});
    }, []);


    /**
     * 顯示 Toaster
     * @param newItem
     */
    const show: TShow = useCallback((newItem) => {
        const key = ulid().toLowerCase();
        // setItems(prevItems => [...prevItems, {key, ...newItem}]);
        setItems(prevItems => [...prevItems, {key, ...newItem}]);
    }, []);


    /**
     * 隱藏 Toaster
     * @param key
     */
    const hidden: THidden = useCallback((key) => {
        setItems(prevItems => {
            const index = prevItems.findIndex(row => row.key === key);
            return removeByIndex(prevItems, index);
        });
    }, []);


    /**
     * 渲染項目
     */
    const renderItems = () => {
        return items.map(item => {
            return <ToasterMessageControl
                key={item.key}
                isVisible={true}
                onEntered={() => hidden(item.key)}
                message={item?.message}
                status={item?.status}
                timeout={props.defaultTimeout || defaultTimeout}
            />;
        });
    };

    return (
        <ModalWithPortal id={props.id || rootId}>
            {renderItems()}
        </ModalWithPortal>
    );
};

export default Toaster;
