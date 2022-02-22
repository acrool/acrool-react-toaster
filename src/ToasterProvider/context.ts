import React from 'react';
import {IItem, THidden, TShowMulti} from '../typings';
// import {toaster} from './ToasterProvider';


/** -----------------------------------------
 |               Interface                   |
 /** ---------------------------------------*/
export interface IContext {
    timeout?: number,
    items: IItem[],
    toaster: TShowMulti,
    hidden: THidden
}


/** -----------------------------------------
 |            CreateContext                 |
 /** ---------------------------------------*/


const ToasterContext = React.createContext<IContext>({
    items: [],
    // @ts-ignore
    toaster: null,
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
