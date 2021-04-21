import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {TextField} from '@material-ui/core';

import s from "./EditableSpan.module.css";
import {propertyType} from "../InputTableBeton/InputTableBeton";

type EditableSpanPropsType = {
    property:propertyType
    value: string|number
    id:string
    onChange: (newValue: string|number, id:string, property:propertyType) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title, props.id, props.property);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
          setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.charCode === 13) {
            setEditMode(false);
            props.onChange(title, props.id, props.property);
        }
    }

    return (editMode
        ? <TextField value={title} onKeyPress={onKeyPressHandler} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.value}</span>)
});
