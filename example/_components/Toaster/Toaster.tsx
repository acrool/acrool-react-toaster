import {EToasterStatus,toast} from '@acrool/react-toaster';

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

    return <Button
        className={className}
        color="grayDanger"
        onClick={handleClick}
    >
        Show Toaster
    </Button>;
};

export default ToasterButton;

