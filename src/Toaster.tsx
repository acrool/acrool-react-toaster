import ReactPortal from '@acrool/react-portal';
import {clsx} from 'clsx';
import {AnimatePresence} from 'framer-motion';
import React from 'react';
import {ulid} from 'ulid';

import {themeMap} from './config';
import MotionDrawer from './MotionDrawer';
import styles from './toaster.module.scss';
import ToasterWrapper from './ToasterWrapper';
import {EToasterStatus, IRow, IToaster, IToasterProps, THide, TShow} from './types';
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

    static defaultProps = {
        id: 'acrool-react-toaster',
        defaultTimeout: 3000,
        limit: 5,
        position: {
            vertical: 'top',
            horizontal: 'center',
        },
        themeMap: {...themeMap},
    };

    get typeProps(){
        return this.props as IToasterProps & typeof Toaster.defaultProps;
    }

    constructor(props) {
        super(props);

        toast = this.show as IToaster;
        toast.success = (message, options) => this.show({...options, message, status: EToasterStatus.success});
        toast.warning = (message, options) => this.show({...options, message, status: EToasterStatus.warning});
        toast.error = (message, options) => this.show({...options, message, status: EToasterStatus.error});
        toast.info = (message, options) => this.show({...options, message, status: EToasterStatus.info});
    }

    /**
     * 顯示 Toaster
     * @param newRow
     */
    show: TShow = (newRow) => {
        const queueKey = ulid().toLowerCase();
        this.setState(prev => {
            if(prev.rows.length >= this.typeProps.limit){
                return {
                    rows: [...removeByIndex(prev.rows, 0), {queueKey, ...newRow}]
                };
            }
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
            const statusTheme = typeof row.status !== 'undefined'? this.props.themeMap?.[row.status]: undefined;

            return <MotionDrawer key={row.queueKey}>
                <ToasterWrapper
                    className={statusTheme?.className}
                    icon={statusTheme?.icon}
                    timeout={row.timeout ?? this.typeProps.defaultTimeout}
                    onClose={() => this.hide(row.queueKey)}
                    message={row.message}
                    isStatusIconVisible={row.isStatusIconVisible ?? this.typeProps.isStatusIconVisible}
                />
            </MotionDrawer>;
        });
    };


    render() {
        return (
            <ReactPortal
                id={this.typeProps.id}
                className={clsx(
                    styles.root,
                    {[styles.positionHorizontalLeft]: this.typeProps.position.horizontal === 'left'},
                    {[styles.positionHorizontalCenter]: this.typeProps.position.horizontal === 'center'},
                    {[styles.positionHorizontalRight]: this.typeProps.position.horizontal === 'right'},
                    {[styles.positionVerticalTop]: this.typeProps.position.vertical === 'top'},
                    {[styles.positionVerticalBottom]: this.typeProps.position.vertical === 'bottom'},
                )}
                containerSelector={this.typeProps.containerSelector}
            >
                <AnimatePresence
                    mode="popLayout"
                >
                    {this.renderItems()}
                </AnimatePresence>
            </ReactPortal>
        );
    }
}

export default Toaster;
