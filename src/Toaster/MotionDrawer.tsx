import {AnimatePresence, motion} from 'framer-motion';
import {ReactNode} from 'react';
import {EVisible} from './types';


const spring = {
    damping: .2,
};

const variantsItem = {
    initial: {height: 0, opacity: 0, translateY: '-30px', scale: .7, marginBottom: 0},
    visible: {height: 'auto', opacity: 1, translateY: '10px', scale: 1, marginBottom: '8px'},
    hidden: {height: 0, opacity: 0, translateY: '-30px', scale: .7},
};


interface IProps {
    className?: string
    visible: EVisible
    onExitComplete?: () => void
    children: ReactNode
}


/**
 * 右側半抽屜彈窗
 * @param isVisible
 * @param visible
 * @param onExitComplete
 * @param children
 */
const MotionRightDrawer = ({
    className,
    visible,
    onExitComplete,
    children,
}: IProps) => {


    return <>
        <AnimatePresence onExitComplete={onExitComplete}>
            {visible === EVisible.visible &&
                <motion.div
                    className={className}
                    key="modal"
                    transition={spring}
                    variants={variantsItem}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                >
                    {children}
                </motion.div>
            }
        </AnimatePresence>

    </>;

};


export default MotionRightDrawer;

