import {AddPostActionType, profileReducer, UpdatePostTextActionType} from "./profile_reducer";
import {AddMessageActionType, dialogsReducer, UpdateMessageTextActionType} from "./dialogs_reducer";

export type PostType = {
    id: number
    text: string
    likesCount: number
}
export type ProfilePageType = {
    newPostText: string,
    posts: Array<PostType>
}

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

export type ActionsType =
    AddPostActionType |
    UpdatePostTextActionType |
    AddMessageActionType |
    UpdateMessageTextActionType
export type DispatchType = (action: ActionsType) => void

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _rerenderTree: () => void
    subscriber: (observer: () => void) => void
    dispatch: DispatchType
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, text: "Hi, how are you?", likesCount: 1},
                {id: 2, text: "It's my first post.", likesCount: 3}
            ]
        },
        dialogsPage: {
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
            newMessageText: ''
        }
    },
    _rerenderTree() {
    },
    subscriber(observer) {
        this._rerenderTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderTree()
    }
}

