import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UnControlOnnOff} from './UnControlOnnOff';
import {action} from "@storybook/addon-actions";
// import exp from "constants";

export default {
    title: 'component/UnControlOnnOff',
    component: UnControlOnnOff,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof UnControlOnnOff>;

const Template: ComponentStory<typeof UnControlOnnOff> = (args) => <UnControlOnnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    defaultOn: true,
    onClick: action('ON or OFF click'),
};

export const OffMode = Template.bind({});
OffMode.args = {
    defaultOn: false,
    onClick: action('ON or OFF click'),
}

// export const OnModes = () => <UnControlOnnOff defaultOn={true} onClick={action('ON or OFF click')}/>
// export const OffModes = () => <UnControlOnnOff defaultOn={false} onClick={action('ON or OFF click')}/>

export const BagMode = () => {<div>Unsync when change defaultValue when already rendered</div>}

export const DefaultInputValue = () => <input defaultValue={'www'} />
