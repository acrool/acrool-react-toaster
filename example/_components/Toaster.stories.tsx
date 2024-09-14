import type {Meta, StoryObj} from '@storybook/react';

import Example from '../src/views/Example';


const meta = {
    title: 'Examples/toast',
    component: Example,
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
    args: {},
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;




export const Primary: Story = {
    args: {},
};


