import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {OnnOff} from './OnnOff';
import {action} from "@storybook/addon-actions";
// import exp from "constants";

export default {
    title: 'component/OnnOff',
    component: OnnOff,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof OnnOff>;

const Template: ComponentStory<typeof OnnOff> = (args) => <OnnOff {...args} />;

export const ModeChange:ComponentStory<typeof OnnOff> = () => {
    const [value, setValue]=useState<boolean>(true)
    return <OnnOff on={value} onClick={setValue}/>
}

export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
    onClick: action('ON or OFF click'),
};

export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
    onClick: action('ON or OFF click'),
}
