import {combineReducers, createStore} from "redux";
import {AddPostActionType, ProfilePageType, profileReducer, UpdatePostTextActionType} from "./profile_reducer";
import {AddMessageActionType, DialogsPageType, dialogsReducer, UpdateMessageTextActionType} from "./dialogs_reducer";

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

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer

})

export let store = createStore(reducers)