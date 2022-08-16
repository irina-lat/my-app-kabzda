import React, {useState} from "react";

type UnControlOnnOffPropsType = {
    onClick: (on: boolean) => void
    defaultOn?: boolean
}

export function UnControlOnnOff(props: UnControlOnnOffPropsType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '50%',
        marginLeft: '10px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onClick(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onClick(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>Onn</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}