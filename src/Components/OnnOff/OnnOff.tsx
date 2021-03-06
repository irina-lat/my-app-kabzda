import React, {useState} from "react";

type OnnOffPropsType={
    on: boolean
    onClick: (on: boolean)=> void
}

export function OnnOff(props: OnnOffPropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '50%',
        marginLeft: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onClick(true)}}>Onn</div>
            <div style={offStyle} onClick={() => {props.onClick(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}