import React, {ChangeEvent, FC} from 'react'
import styles from "./Dialogs.module.css";
import {Dialog} from "./DialogItem/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType, DispatchType} from "../../Redux/store";
import {addMessageAC, updateMessageTextAC} from "../../Redux/dialogs_reducer"

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: DispatchType
}

export const Dialogs:FC<DialogsPropsType> = (props) => {
    let dialogs = props.dialogsPage.dialogs
    let dialogsElements = dialogs.map(dialog =>
        <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)

    let messages = props.dialogsPage.messages
    let messagesElements = messages.map(message =>
        <Message message={message} key={message.id}/>)

    const addMessage = () => {
        if (props.dialogsPage.newMessageText) props.dispatch(addMessageAC())
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = event.currentTarget.value
        if (newValue) {
            props.dispatch(updateMessageTextAC(newValue))
        }
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div className={styles.messagesEl}>{messagesElements}</div>
                <div className={styles.textarea}>
                    <textarea value={props.dialogsPage.newMessageText}
                              onChange={onMessageChange}
                    />
                </div>
                <div className={styles.btn}>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

