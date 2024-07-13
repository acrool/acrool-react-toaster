import {AnimatePresence, motion} from 'framer-motion';
import {ReactNode} from 'react';


const spring = {
    damping: .2,
};

const variantsItem = {
    initial: {height: 0, opacity: 0, translateY: '-30px', scale: .7, marginBottom: 0},
    visible: {height: 'auto', opacity: 1, translateY: '10px', scale: 1, marginBottom: '8px'},
    hidden: {height: 0, opacity: 0, translateY: '-5px'},
};


interface IProps {
    className?: string
    isVisible?: boolean
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
    isVisible,
    onExitComplete,
    children,
}: IProps) => {


    /**
     * 渲染顯示介面
     * (AnimatePresence 偵測 motion.div 不渲染則會自己移除Dom)
     */
    const renderMotion = () => {
        if(!isVisible){
            return null;
        }

        return <motion.div
            className={className}
            key="modal"
            transition={spring}
            variants={variantsItem}
            animate="visible"
            initial="initial"
            exit="hidden"
        >
            {children}
        </motion.div>;
    };


    return <>
        <AnimatePresence onExitComplete={onExitComplete}>
            {renderMotion()}
        </AnimatePresence>

    </>;

};


export default MotionRightDrawer;

