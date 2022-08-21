import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


// import exp from "constants";

export default {
    title: 'component/Input',
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue((actualValue))
    }
    return <> <input onChange={onChangeInput}/> - {value} </>
}

export const GetValueTrackValueOfUncontrolledInputByButton = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <> <input ref={inputRef}/>
        <button onClick={save}> save </button> actual value - {value} </>
}
//
// export const UncontrolledInputWithFixedValue= () => <input value={'it-incubator.by'} />
