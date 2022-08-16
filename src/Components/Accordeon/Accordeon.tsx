import React from "react";

type AccordeonPropsType = {
    titleValue: string,
    collapsed: boolean
    onClick: ()=> void
}

export function Accordeon(props: AccordeonPropsType) {
    console.log('Accordeon')
    return (
        <div>
            <AccordeonTitle title={props.titleValue} onClick={props.onClick}/>
            {props.collapsed && <AccordeonBody/>}
        </div>
    )
}

type AccordeonTitlePropsType = {
    title: string
    onClick: ()=> void
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering')
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordeonBody(props: any) {
    console.log('AccordeonBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

