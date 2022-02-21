import React from 'react';
import {EStatus} from '../typings';


/** -----------------------------------------
 |               Interface                   |
 /** ---------------------------------------*/
export interface IState {
    key: string,
    status?: EStatus,
    message: string,
}

type TShow = (newItem: Omit<IState, 'key'>) => void;
type THidden = (key: string) => void;

export interface IContext {
    items: IState[],
    show: TShow,
    hidden: THidden
}


/** -----------------------------------------
 |            CreateContext                 |
 /** ---------------------------------------*/


const ToasterContext = React.createContext<IContext>({
    items: [],
    show: () => {},
    hidden: () => {}
});

ToasterContext.displayName = 'ToasterProvider';
const ToasterContextConsumer = ToasterContext.Consumer;
const ToasterContextProvider = ToasterContext.Provider;


export {
    ToasterContext,
    ToasterContextConsumer,
    ToasterContextProvider,
};
