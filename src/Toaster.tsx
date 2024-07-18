import ReactPortal from '@acrool/react-portal';
import {AnimatePresence} from 'framer-motion';
import React from 'react';
import {ulid} from 'ulid';

import {defaultTimeout, rootId} from './config';
import MotionDrawer from './MotionDrawer';
import styles from './toaster.module.scss';
import ToasterWrapper from './ToasterWrapper';
import {EStatus, IRow, IToaster, IToasterProps, THide, TShow, TShowMulti} from './types';
import {removeByIndex} from './utils';


/**
 * Global var
 */
export let toast: IToaster;

interface IState {
    rows: IRow[]
}

class Toaster extends React.Component<IToasterProps, IState> {
    state: IState = {
        rows: []
    };

    constructor(props) {
        super(props);

        toast = this.show as IToaster;
        toast.success = (item) => this.show({...item, status: EStatus.success});
        toast.warning = (item) => this.show({...item, status: EStatus.warning});
        toast.error = (item) => this.show({...item, status: EStatus.error});
        toast.info = (item) => this.show({...item, status: EStatus.info});
    }

    /**
     * 顯示 Toaster
     * @param newRow
     */
    show: TShow = (newRow) => {
        const queueKey = ulid().toLowerCase();
        this.setState(prev => {
            return {
                rows: [...prev.rows, {queueKey, ...newRow}]
            };
        });
    };


    /**
     * 隱藏 Toaster
     * @param queueKey
     */
    hide: THide = (queueKey) => {
        this.setState(prev => {
            const index = prev.rows.findIndex(row => row.queueKey === queueKey);
            return {
                rows: removeByIndex(prev.rows, index),
            };
        });
    };


    /**
     * 渲染項目
     */
    renderItems = () => {
        const {rows} = this.state;
        return rows.map(row => {
            return <MotionDrawer key={row.queueKey}>
                <ToasterWrapper
                    status={row.status}
                    timeout={row.timeout ?? this.props.defaultTimeout ?? defaultTimeout}
                    onClose={() => this.hide(row.queueKey)}
                    message={row.message}
                />
            </MotionDrawer>;
        });
    };


    render() {
        return (
            <ReactPortal
                id={this.props.id || rootId}
                className={styles.root}
            >
                <AnimatePresence>
                    {this.renderItems()}
                </AnimatePresence>
            </ReactPortal>
        );
    }
}

export default Toaster;
