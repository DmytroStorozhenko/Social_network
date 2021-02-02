import React, {FC} from 'react'
import {NavLink} from 'react-router-dom';
import classes from "./../Dialogs.module.css";
import {DialogType} from "../../../Redux/dialogs_reducer";

type DialogPropsType = {
    id: number
    name: string
}
export const Dialog:FC<DialogPropsType> = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}


