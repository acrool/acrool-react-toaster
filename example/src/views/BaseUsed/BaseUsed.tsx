import {baseImage as images} from 'config/images';
import React from 'react';
import {ERowAlign, Flex} from 'bear-styled-grid';
import {useToaster, EStatus, toast as toast} from 'bear-react-toaster';
import {Button} from 'bear-components/atoms';




const BaseUsed = () => {
    const {toaster} = useToaster();

    return (
        <div>



            <Button  color="success" onClick={() => toaster({message: 'useToaster message'})}>
                useToaster message
            </Button>

            <Button  color="success" onClick={() => toaster({status: EStatus.success, message: 'useToaster success + message'})}>
                useToaster status + message
            </Button>


            <Button  color="success" onClick={() => toaster.success({message: 'useToaster --- toaster.success'})}>
                useToaster --- toaster.success
            </Button>


            <Button  color="success" onClick={() => toaster({status: EStatus.warning, message: 'useToaster warning + message'})}>
                useToaster warning + message
            </Button>
            <Button  color="danger" onClick={() => toaster({status: EStatus.error, message: 'useToaster error + message'})}>
                useToaster error + message
            </Button>


            <Button  color="danger" onClick={() => toaster.error({message: 'useToaster --- toaster.error'})}>
                useToaster --- toaster.error
            </Button>


            <Button  color="info" onClick={() => toaster({status: EStatus.info, message: 'useToaster info + message'})}>
                useToaster info + message
            </Button>


            <Button  color="success" onClick={() => toast({status: EStatus.success, message: 'window.toaster status + message'})}>
                window.toaster status + message
            </Button>


        </div>
    );

};

export default BaseUsed;
