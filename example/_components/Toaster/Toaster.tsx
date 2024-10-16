import {toast, EToasterStatus} from '@acrool/react-toaster';

import Button from '../../src/components/Button';

interface IProps {
    className: string
    message: string
    timeout?: number
    status?: EToasterStatus
}

const ToasterButton = ({
    className,
    message,
    timeout,
    status,
}: IProps) => {
    const handleClick = () => {
        toast({message, timeout, status});
    };

    return <Button color="grayDanger" onClick={handleClick} className={className}>
        Show Toaster
    </Button>;
};

export default ToasterButton;

