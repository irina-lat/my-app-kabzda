import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UnControlRating} from './UnControlRating';
import {action} from "@storybook/addon-actions";
// import exp from "constants";

export default {
    title: 'component/UnControlRating',
    component: UnControlRating,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof UnControlRating>;

const Template: ComponentStory<typeof UnControlRating> = (args) => <UnControlRating {...args} />;

const callback = action('rating changing')

export const EmptyRating = () => <UnControlRating defaultValue={0} onChange={callback} />
export const Rating1 = () => <UnControlRating defaultValue={1} onChange={callback} />
export const Rating2 = () => <UnControlRating defaultValue={2} onChange={callback} />
export const Rating3 = () => <UnControlRating defaultValue={3} onChange={callback} />
export const Rating4 = () => <UnControlRating defaultValue={4} onChange={callback} />
export const Rating5 = () => <UnControlRating defaultValue={5} onChange={callback} />
