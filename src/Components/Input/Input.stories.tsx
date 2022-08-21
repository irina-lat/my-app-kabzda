import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


// import exp from "constants";

export default {
    title: 'component/Input',
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <> <input onChange={(e) => {
        const actualValue = e.currentTarget.value;
        setValue((actualValue))
    }}/> - {value} </>
}

export const UncontrolledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

