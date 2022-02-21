import {useContext} from 'react';
import {ToasterContext} from './ToasterProvider/context';

export const useToaster = () => useContext(ToasterContext);
