import {ActionsType, PostType, ProfilePageType} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>

export function profileReducer(state: ProfilePageType, action: ActionsType) {
    switch (action.type) {
        case 'ADD_POST':
            let newPost: PostType = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likesCount: Math.round(Math.random() * 10)
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: 'ADD_POST'}) as const
export const updatePostTextAC = (newText: string) => ({type: 'UPDATE_NEW_POST_TEXT', newText: newText}) as const
