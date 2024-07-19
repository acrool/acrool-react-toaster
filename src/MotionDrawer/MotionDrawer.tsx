import {motion, Variants} from 'framer-motion';
import {ReactNode} from 'react';

import styles from './motion-drawer.module.scss';


const spring = {
    damping: .2,
};

const variantsItem: Variants = {
    initial: {height: 0, opacity: 0, translateY: '-30px', scale: .7, marginBottom: 0},
    show: {height: 'auto', opacity: 1, translateY: '10px', scale: 1, marginBottom: '8px'},
    exit: {height: 0, opacity: 0, translateY: '-5px'},
};


interface IProps {
    children: ReactNode
}


/**
 * 開啟動畫抽屜
 * @param children
 */
const MotionDrawer = ({
    children,
}: IProps) => {
    return <motion.div
        className={styles.motionDrawer}
        transition={spring}
        variants={variantsItem}
        initial="initial"
        animate="show"
        exit="exit"
    >
        {children}
    </motion.div>;
};


export default MotionDrawer;

