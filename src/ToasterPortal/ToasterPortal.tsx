import React, {useEffect, useState} from 'react';
import {ulid} from 'ulid';
import {removeByIndex} from '../utils';
import {EStatus, IItem, THidden, TShow, TShowMulti} from '../types';
import ModalWithPortal from './ModalWithPortal';
import Toaster from '../Toaster';
import {IToasterPortalProps} from './types';
import {defaultTimeout, rootId} from '../config';


/**
 * Global var
 */
export let toast: TShowMulti;

const ToasterPortal: React.FC<IToasterPortalProps> = (props) => {
    const [items, setItems] = useState<IItem[]>([]);

    // set global
    useEffect(() => {
        toast = _show as TShowMulti;
        toast.success = (item) => _show({...item, status: EStatus.success});
        toast.warning = (item) => _show({...item, status: EStatus.warning});
        toast.error = (item) => _show({...item, status: EStatus.error});
        toast.info = (item) => _show({...item, status: EStatus.info});
    }, []);

    const _show: TShow = (newItem) => {
        const key = ulid().toLowerCase();
        setItems(prevItems => [...prevItems, {key, ...newItem}]);
    };

    const _hidden: THidden = (key) => {
        setItems(prevItems => {
            const index = prevItems.findIndex(row => row.key === key);
            return removeByIndex(prevItems, index);
        });
    };

    const renderItems = () => {
        return items.map(item => {
            return <Toaster
                key={item.key}
                isVisible={true}
                onEntered={() => _hidden(item.key)}
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

export default ToasterPortal;
