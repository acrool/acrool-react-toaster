import {motion, Variants} from 'framer-motion';
import {ReactNode} from 'react';

import styles from './motion-drawer.module.scss';


const spring = {
    damping: .2,
};

const variantsItem: Variants = {
    initial: {opacity: 0, y: -30},
    animate: {opacity: 1, y: 10},
    exit: {opacity: 0, y: -5},
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
        layout
        // className={styles.motionDrawer}
        // variants={variantsItem}
        initial={{height: 0, scale: 0.8, opacity: 0, marginTop: '0'}}
        animate={{height: 'auto',scale: 1, opacity: 1, marginTop: '10px'}}
        exit={{height: 0, scale: 0.8, opacity: 0, marginTop: '0'}}
        transition={{type: 'spring'}}
    >
        {children}
    </motion.div>;
};


export default MotionDrawer;

