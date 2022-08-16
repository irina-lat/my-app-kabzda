import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {UnControlAccordeon} from './UnControlAccordeon';
import {action} from "@storybook/addon-actions";
// import exp from "constants";

export default {
    title: 'component/UnControlAccordeon',
    component: UnControlAccordeon,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof UnControlAccordeon>;

const Template: ComponentStory<typeof UnControlAccordeon> = (args) => <UnControlAccordeon {...args} />;

export const ModeChange: ComponentStory<typeof UnControlAccordeon> = () => {
    return <UnControlAccordeon titleValue={'Users'}/>
}
