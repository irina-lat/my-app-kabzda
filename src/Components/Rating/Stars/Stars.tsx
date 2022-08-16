import React from "react";
import cl from './Star.module.css'

export type StarValue = 0 | 1 | 2 | 3 | 4 | 5

type StarsPropsType ={
    star: StarValue
    onClickStar: (value: StarValue )=> void
}

function Stars(props:StarsPropsType){

    return(
        <div>
            <Star selected={props.star > 0} onClickStar={props.onClickStar} star={1}/>
            <Star selected={props.star > 1} onClickStar={props.onClickStar} star={2}/>

        </div>
    )
}

type StarPropsType={
    selected: boolean
    star: StarValue
    onClickStar: (value: StarValue )=> void
}

function Star(props:StarPropsType){
    return (<span onClick={()=> {props.onClickStar(props.star)}}>{props.selected ? <b>star </b> : 'star '}</span>)
}


export default Stars