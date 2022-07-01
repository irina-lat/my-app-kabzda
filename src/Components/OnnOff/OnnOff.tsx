import React from "react";
import s from './OnnOff.module.css'

type OnnOffPropsType = {
    select: boolean
}


export function OnnOff(props: OnnOffPropsType) {
    return (
    <div className={s.full}>
        <button className={`${s.red} ${s.green}`}>onn</button>
        <button className={`${s.red} ${s.green}`}>off</button>
        <div className={`${s.red} ${s.green} ${s.round}`}></div>
    </div>
)
}