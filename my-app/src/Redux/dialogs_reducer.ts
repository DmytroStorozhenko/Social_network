import {ActionsType, DialogsPageType, MessageType} from "./store";

export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextAC>

export function dialogsReducer(state: DialogsPageType, action: ActionsType) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage: MessageType = {
                id: state.messages.length + 1,
                text: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state

        case 'UPDATE_NEW_MESSAGE_TEXT':
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}


export const addMessageAC = () => ({type: 'ADD_MESSAGE'}) as const
export const updateMessageTextAC = (newMessage: string) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    newMessageText: newMessage
}) as const
