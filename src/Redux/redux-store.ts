import {combineReducers, createStore} from "redux";
import {
    ProfileActionsType,
    ProfilePageType,
    profileReducer,
} from "./profile_reducer";
import {
    DialogsActionsType,
    DialogsPageType,
    dialogsReducer,
} from "./dialogs_reducer";
import {UsersActionsType, UsersPageType, usersReducer} from "./users_reducer";

export type ActionsType =  ProfileActionsType | DialogsActionsType | UsersActionsType

export type DispatchType = (action: ActionsType) => void

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers)