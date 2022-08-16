import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingValueType} from './Rating';
// import exp from "constants";

export default {
    title: 'component/Rating',
    component: Rating,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const RatingChange:ComponentStory<typeof Rating> = () => {
    const [rating, setRating]=useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating} />
}

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
    onClick: x=>x,
};

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    onClick: x=>x,
}

export const Rating2 = Template.bind({})
Rating2.args = {
    value: 2,
    onClick: x=>x,
}

export const Rating3 = Template.bind({})
Rating3.args = {
    value: 3,
    onClick: x=>x,
}

export const Rating4 = Template.bind({})
Rating4.args = {
    value: 4,
    onClick: x=>x,
}

export const Rating5 = Template.bind({})
Rating5.args = {
    value: 5,
    onClick: x=>x,
}