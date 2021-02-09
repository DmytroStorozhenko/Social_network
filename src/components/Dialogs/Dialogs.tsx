import React, {ChangeEvent, FC} from 'react'
import styles from "./Dialogs.module.css";
import {Dialog} from "./DialogItem/Dialog";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../Redux/dialogs_reducer"

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    messageChange: (newValue: string) => void
    addMessage: () => void
}

export const Dialogs:FC<DialogsPropsType> = (props) => {
    let dialogs = props.dialogs
    let dialogsElements = dialogs.map(dialog =>
        <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)

    let messages = props.messages
    let messagesElements = messages.map(message =>
        <Message message={message} key={message.id}/>)

    const onAddMessage = () => {
        if (props.newMessageText) props.addMessage()
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = event.currentTarget.value
        if (newValue) {
            props.messageChange(newValue)
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
                    <textarea value={props.newMessageText}
                              onChange={onMessageChange}
                    />
                </div>
                <div className={styles.btn}>
                    <button onClick={onAddMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}
