import React, {useState} from "react";

type UnControlAccordeonPropsType = {
    titleValue: string,
    // collapsed: boolean
}

export function UnControlAccordeon(props: UnControlAccordeonPropsType) {
    console.log('UnControlAccordeon')

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <UnControlAccordeonTitle title={props.titleValue} onClick={()=> setCollapsed(!collapsed)}/>
            {!collapsed && <UnControlAccordeonBody/>}
        </div>
    )
}

type UnControlAccordeonTitlePropsType = {
    title: string
    onClick: ()=> void
}

function UnControlAccordeonTitle(props: UnControlAccordeonTitlePropsType) {
    console.log('UnControlAccordeonTitle rendering')
    return (
        <h3 onClick={()=> {props.onClick()} }>{props.title}</h3>
    )
}

function UnControlAccordeonBody(props: any) {
    console.log('UnControlAccordeonBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

