import {EToasterStatus, toast, ToasterPortal} from '@acrool/react-toaster';
import type {Meta, StoryObj} from '@storybook/react';

import Button from '../../atoms/Button';


const meta = {
    title: 'Primary/toast',
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
    },
    argTypes: {},
    args: {
        message: 'default message',
        timeout: 0,
    },
    render: function Render(args) {
        return <>
            <Button color="primary" onClick={() => toast(args)}>Show</Button>
            <ToasterPortal position={{vertical: 'top', horizontal: 'center'}}/>
        </>;
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        message: 'Good afternoon, I'
    },

};


export const WithInfo: Story = {
    args: {
        status: EToasterStatus.info,
        message: 'You have a new message'
    },
};

export const WithSuccess: Story = {
    args: {
        status: EToasterStatus.success,
        message: 'You have been logged out successfully!'
    },
};

export const WithError: Story = {
    args: {
        status: EToasterStatus.error,
        message: 'Sorry, the account password you entered is wrong'
    },
};

export const WithWarning: Story = {
    args: {
        status: EToasterStatus.warning,
        message: 'Please check if your parameter settings are correct?'
    },
};



export const WithLimit3: Story = {
    args: {
        status: EToasterStatus.success,
        message: 'Please check if your parameter settings are correct?'
    },
    render: function Render(args) {
        return <>
            <Button color="primary" onClick={() => toast(args)}>Show</Button>
            <ToasterPortal position={{vertical: 'top', horizontal: 'center'}} limit={3}/>
        </>;
    },
};


export const WithRightTop: Story = {
    args: {
        status: EToasterStatus.success,
        message: 'Please check if your parameter settings are correct?'
    },
    render: function Render(args) {
        return <>
            <Button color="primary" onClick={() => toast(args)}>Show</Button>
            <ToasterPortal position={{vertical: 'top', horizontal: 'right'}}/>
        </>;
    },
};

export const WithRightBottom: Story = {
    args: {
        status: EToasterStatus.success,
        message: 'Please check if your parameter settings are correct?'
    },
    render: function Render(args) {
        return <>
            <Button color="primary" onClick={() => toast(args)}>Show</Button>
            <ToasterPortal position={{vertical: 'bottom', horizontal: 'right'}}/>
        </>;
    },
};

export const WithLeftTop: Story = {
    args: {
        status: EToasterStatus.success,
        message: 'Please check if your parameter settings are correct?'
    },
    render: function Render(args) {
        return <>
            <Button color="primary" onClick={() => toast(args)}>Show</Button>
            <ToasterPortal position={{vertical: 'top', horizontal: 'left'}}/>
        </>;
    },
};

export const WithLeftBottom: Story = {
    args: {
        status: EToasterStatus.success,
        message: 'Please check if your parameter settings are correct?'
    },
    render: function Render(args) {
        return <>
            <Button color="primary" onClick={() => toast(args)}>Show</Button>
            <ToasterPortal position={{vertical: 'bottom', horizontal: 'left'}}/>
        </>;
    },
};


