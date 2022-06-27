import React from "react";

type AccordeonPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordeon(props: AccordeonPropsType) {
    console.log('Accordeon')
    if (props.collapsed === true) {
        return (
            <div>
                <AccordeonTitle title={props.titleValue}/>
                <AccordeonBody/>
            </div>
        )
    }
    return (
        <div>
            <AccordeonTitle title={props.titleValue}/>
            {/*<AccordeonBody/>*/}
        </div>
    )
}

type AccordeonTitlePropsType = {
    title: string
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering')
    return (
        <h3>{props.title}</h3>
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

export default Accordeon