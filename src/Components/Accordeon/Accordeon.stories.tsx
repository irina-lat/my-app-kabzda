import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Accordeon} from './Accordeon';
import {action} from "@storybook/addon-actions";
// import exp from "constants";

export default {
    title: 'component/Accordeon',
    component: Accordeon,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Accordeon>;

const Template: ComponentStory<typeof Accordeon> = (args) => <Accordeon {...args} />;

export const ModeChange: ComponentStory<typeof Accordeon> = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordeon titleValue={'Users'} collapsed={value} onClick={() => {
        setValue(!value)
    }}/>
}

export const UserCollapseMode = Template.bind({});
UserCollapseMode.args = {
    titleValue: 'User',
    collapsed: false,
    onClick: action('accordeon mode change event fired'),
}

export const MenuUncollapseMode = Template.bind({});
MenuUncollapseMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onClick: action('accordeon mode change event fired'),
}