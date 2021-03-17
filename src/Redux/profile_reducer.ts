import {ProfileResponseType} from "../api/profile_api";

type AddPostActionType = ReturnType<typeof addPost>
type UpdatePostTextActionType = ReturnType<typeof updatePostText>
type setProfileActionType = ReturnType<typeof setProfile>

export type ProfileActionsType =
    AddPostActionType |
    UpdatePostTextActionType |
    setProfileActionType

export type PostType = {
    id: number
    text: string
    likesCount: number
}
export type ProfilePageType = {
    profile: ProfileResponseType | null
    newPostText: string,
    posts: Array<PostType>
}

let initialState: ProfilePageType = {
    profile: null,
    newPostText: '',
    posts: [
        {id: 1, text: "Hi, how are you?", likesCount: 1},
        {id: 2, text: "It's my first post.", likesCount: 3}
    ]}

export function profileReducer(state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType  {
    switch (action.type) {
        case "SET_PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case 'ADD_POST':
            let newPost: PostType = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likesCount: Math.round(Math.random() * 10)
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case 'UPDATE_NEW_POST_TEXT':
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}


export const setProfile = (profile: ProfileResponseType) => ({
    type: 'SET_PROFILE', profile}) as const

export const addPost = () => ({
    type: 'ADD_POST'}) as const

export const updatePostText = (newText: string) => ({
    type: 'UPDATE_NEW_POST_TEXT', newText}) as const

