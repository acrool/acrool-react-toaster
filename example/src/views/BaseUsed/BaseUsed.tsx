import {baseImage as images} from 'config/images';
import React from 'react';
import {ERowAlign, Flex} from 'bear-styled-grid';
import {EStatus, toast} from 'bear-react-toaster';
import {Button} from 'bear-components/atoms';




const BaseUsed = () => {

    return (
        <div>
            <Button  color="success" onClick={() => toast({message: 'useToaster message'})}>
                useToaster message
            </Button>

            <Button  color="success" onClick={() => toast({status: EStatus.success, message: 'useToaster success + message'})}>
                useToaster status + message
            </Button>


            <Button  color="success" onClick={() => toast.success({message: 'useToaster --- toaster.success'})}>
                useToaster --- toaster.success
            </Button>


            <Button  color="success" onClick={() => toast({status: EStatus.warning, message: 'useToaster warning + message'})}>
                useToaster warning + message
            </Button>
            <Button  color="danger" onClick={() => toast({status: EStatus.error, message: 'useToaster error + message'})}>
                useToaster error + message
            </Button>


            <Button  color="danger" onClick={() => toast.error({message: 'useToaster --- toaster.error'})}>
                useToaster --- toaster.error
            </Button>


            <Button  color="info" onClick={() => toast({status: EStatus.info, message: 'useToaster info + message'})}>
                useToaster info + message
            </Button>


            <Button  color="success" onClick={() => toast({status: EStatus.success, message: 'window.toaster status + message'})}>
                window.toaster status + message
            </Button>


        </div>
    );

};

export default BaseUsed;
