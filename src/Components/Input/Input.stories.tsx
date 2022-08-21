import React, {ChangeEvent, useRef, useState} from 'react';




// import exp from "constants";

export default {
    title: 'component/Input',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
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

export const ControlInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeInput}/>
}

export const ControlCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={parentValue} onChange={onChecked}/>
}

export const ControlSelect = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeInput = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeInput}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Rostov</option>
    </select>
}

export const UncontrolledInputWithFixedValue= () => <input value={'it-incubator.by'} />
