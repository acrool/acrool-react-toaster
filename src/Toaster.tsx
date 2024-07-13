import React, {useCallback, useEffect, useState} from 'react';
import {ulid} from 'ulid';
import {removeByIndex} from './utils';
import {EStatus, IRow, THidden, TShow, TShowMulti} from './types';
import ModalWithPortal from './ModalWithPortal';
import {defaultTimeout, rootId} from './config';
import ToasterWrapper from './ToasterWrapper';


/**
 * Global var
 */
export let toast: TShowMulti;

interface IProps {
    id?: string
    defaultTimeout?: number
}

const Toaster = (props: IProps) => {
    const [rows, setRows] = useState<IRow[]>([]);

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
        setRows(prevRows => [...prevRows, {key, ...newItem}]);
    }, []);


    /**
     * 隱藏 Toaster
     * @param key
     */
    const hidden: THidden = useCallback((key) => {
        setRows(prevRows => {
            const index = prevRows.findIndex(row => row.key === key);
            return removeByIndex(prevRows, index);
        });
    }, []);


    /**
     * 渲染項目
     */
    const renderItems = () => {
        return rows.map(row => {
            return <ToasterWrapper
                onExitComplete={() => hidden(row.key)}
                key={row.key}
                isVisible={true}
                message={row?.message}
                status={row?.status}
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