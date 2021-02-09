import React from 'react'
import {addMessageAC, DialogsPageType, updateMessageTextAC} from "../../Redux/dialogs_reducer"
import {DispatchType, StateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

type DialogsDispatchType = {
    messageChange: (newValue: string) => void
    addMessage: () => void
}

type OwmPropsType = {}

const mapStateToProps = (state: StateType): DialogsPageType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
})

const mapDispatchToProps = (dispatch: DispatchType): DialogsDispatchType => ({
    messageChange: (newValue: string) => dispatch(updateMessageTextAC(newValue)),
    addMessage: () => dispatch(addMessageAC())
})

export const DialogsContainer =
    connect<DialogsPageType, DialogsDispatchType, OwmPropsType, StateType>(mapStateToProps, mapDispatchToProps)(Dialogs)



