import {ActionsType} from "./redux-store";

export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextAC>

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dmytriy'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Alexey'}
    ],
    messages: [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'What is your IT Incubator?'},
        {id: 3, text: 'Meow!!!'}
    ],
    newMessageText: ''}

export function dialogsReducer(state: DialogsPageType = initialState, action: ActionsType) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage: MessageType = {
                id: state.messages.length + 1,
                text: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case 'UPDATE_NEW_MESSAGE_TEXT':
            return {...state, newMessageText: action.newMessageText}
        default:
            return state
    }
}

export const addMessageAC = () => ({
    type: 'ADD_MESSAGE'}) as const
export const updateMessageTextAC = (newMessageText: string) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT', newMessageText}) as const
