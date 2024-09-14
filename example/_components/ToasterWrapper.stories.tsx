import {ToasterWrapper, EStatus} from '@acrool/react-toaster';
import {Flex} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';



const meta = {
    title: 'Components/ToasterWrapper',
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
        status: EStatus.success,
        message: 'Your profile save success',
    },
} satisfies Meta<typeof ToasterWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;




export const WithSuccess: Story = {
    args: {
        status: EStatus.success,
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
        status: EStatus.info,
        message: 'You have a long message',
    },
};


export const WithWarning: Story = {
    args: {
        status: EStatus.warning,
        message: 'Are you sure you want to submit the form?',
    },
};


export const WithError: Story = {
    args: {
        status: EStatus.error,
        message: 'No permission to operate this feature',
    },
};
