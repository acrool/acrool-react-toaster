import {EToasterStatus,ToasterPortal} from '@acrool/react-toaster';
import type {Meta, StoryObj} from '@storybook/react';

import ToasterButton from './Toaster';


const meta = {
    title: 'Examples/toast',
    component: ToasterButton,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {
            description: {
                component: 'toast show method'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        timeout: 0
    },
} satisfies Meta<typeof ToasterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToasterPortalProps = {
    position: {
        vertical: 'top',
        horizontal: 'center',
    }
};

export const Primary: Story = {
    args: {
        message: 'Good afternoon, I'
    },
    render: function Render(args) {
        return <>
            <ToasterButton {...args}/>
            <ToasterPortal {...ToasterPortalProps}/>
        </>;
    },
};


export const Info: Story = {
    args: {
        status: EToasterStatus.info,
        message: 'You have a new message'
    },
    render: function Render(args) {
        return <>
            <ToasterButton {...args}/>
            <ToasterPortal {...ToasterPortalProps}/>

        </>;
    },
};

export const Success: Story = {
    args: {
        status: EToasterStatus.success,
        message: 'You have been logged out successfully!'
    },
    render: function Render(args) {
        return <>
            <ToasterButton {...args}/>
            <ToasterPortal {...ToasterPortalProps}/>

        </>;
    },
};

export const Error: Story = {
    args: {
        status: EToasterStatus.error,
        message: 'Sorry, the account password you entered is wrong'
    },
    render: function Render(args) {
        return <>
            <ToasterButton {...args}/>
            <ToasterPortal {...ToasterPortalProps}/>

        </>;
    },
};

export const Warning: Story = {
    args: {
        status: EToasterStatus.warning,
        message: 'Please check if your parameter settings are correct?'
    },
    render: function Render(args) {
        return <>
            <ToasterButton {...args}/>
            <ToasterPortal {...ToasterPortalProps}/>

        </>;
    },
};


