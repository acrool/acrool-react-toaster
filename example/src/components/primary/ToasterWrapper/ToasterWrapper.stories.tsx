import {ToasterWrapper, EToasterStatus} from '@acrool/react-toaster';
import {Flex} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';



const meta = {
    title: 'Primary/ToasterWrapper',
    component: ToasterWrapper,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {
            description: {
                component: 'Custom skeleton by component'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        timeout: 3000,
        onClose: fn(),
        status: EToasterStatus.success,
        message: 'Your profile save success',
    },
} satisfies Meta<typeof ToasterWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;




export const WithSuccess: Story = {
    args: {
        status: EToasterStatus.success,
        message: 'Your profile save success',
    },
    render: function Render(args) {

        return <Flex className="gap-2">
            <ToasterWrapper {...args}/>
        </Flex>;
    },
};



export const WithInfo: Story = {
    args: {
        status: EToasterStatus.info,
        message: 'You have a long message',
    },
};


export const WithWarning: Story = {
    args: {
        status: EToasterStatus.warning,
        message: 'Are you sure you want to submit the form?',
    },
};


export const WithError: Story = {
    args: {
        status: EToasterStatus.error,
        message: 'No permission to operate this feature',
    },
};


export const WithHiddenIcon: Story = {
    args: {
        status: EToasterStatus.info,
        message: 'No permission to operate this feature',
        isStatusIconVisible: false,
    },
};


export const WithReactNode: Story = {
    args: {
        status: EToasterStatus.info,
        message: <Flex className="align-items-center gap-2">
            <div style={{backgroundColor: "gray"}}>Icon</div>
            <div>No permission to operate this feature</div>
        </Flex>,
        isStatusIconVisible: false,
    },
};
