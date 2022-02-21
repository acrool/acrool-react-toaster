import {baseImage as images} from 'config/images';
import React from 'react';
import {ERowAlign, Flex} from 'bear-styled-grid';
import {useToaster, EStatus} from 'bear-react-toaster';
import {Button} from 'bear-components/atoms';




const BaseUsed = () => {
    const {show} = useToaster();

    return (
        <div>



            <Button  color="success" onClick={() => show({message: 'useToaster message'})}>
                useToaster message
            </Button>

            <Button  color="success" onClick={() => show({status: EStatus.success, message: 'useToaster status + message'})}>
                useToaster status + message
            </Button>

            <Button  color="success" onClick={() => window.toaster({status: EStatus.success, message: 'window.toaster status + message'})}>
                window.toaster status + message
            </Button>


        </div>
    );

};

export default BaseUsed;
