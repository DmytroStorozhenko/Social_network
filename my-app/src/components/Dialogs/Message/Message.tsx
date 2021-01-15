import React, {FC} from 'react'
import classes from "./../Dialogs.module.css";
import {MessageType} from "../../../Redux/store";

type MessagePropsType = {
    message: MessageType
}
export const Message:FC<MessagePropsType> = (props) => {
    return (
        <div className={classes.message}>{props.message.text}</div>
    )
}
