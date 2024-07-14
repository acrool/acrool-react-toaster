import ReactPortal from '@acrool/react-portal';
import {AnimatePresence} from 'framer-motion';
import React, {useCallback, useEffect, useState} from 'react';
import {ulid} from 'ulid';

import {defaultTimeout, rootId} from './config';
import MotionDrawer from './MotionDrawer';
import styles from './toaster.module.scss';
import ToasterWrapper from './ToasterWrapper';
import {EStatus, IRow, IToasterProps, THidden, TShow, TShowMulti} from './types';
import {removeByIndex} from './utils';


/**
 * Global var
 */
export let toast: TShowMulti;


const Toaster = (props: IToasterProps) => {
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
    const show: TShow = useCallback((newRow) => {
        const queueKey = ulid().toLowerCase();
        setRows(prevRows => [...prevRows, {queueKey, ...newRow}]);
    }, []);


    /**
     * 隱藏 Toaster
     * @param key
     */
    const hidden: THidden = useCallback((key) => {
        setRows(prevRows => {
            const index = prevRows.findIndex(row => row.queueKey === key);
            return removeByIndex(prevRows, index);
        });
    }, []);


    /**
     * 渲染項目
     */
    const renderItems = () => {
        return rows.map(row => {
            return <MotionDrawer key={row.queueKey}>
                <ToasterWrapper
                    status={row.status}
                    timeout={row.timeout ?? props.defaultTimeout ?? defaultTimeout}
                    onClose={() => hidden(row.queueKey)}
                    message={row.message}
                />
            </MotionDrawer>;
        });
    };

    return (
        <ReactPortal
            id={props.id || rootId}
            className={styles.root}
        >
            <AnimatePresence>
                {renderItems()}
            </AnimatePresence>
        </ReactPortal>
    );
};

export default Toaster;
