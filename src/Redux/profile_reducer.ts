type AddPostActionType = ReturnType<typeof addPostAC>
type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>

export type PostsActionsType = AddPostActionType | UpdatePostTextActionType

export type PostType = {
    id: number
    text: string
    likesCount: number
}
export type ProfilePageType = {
    newPostText: string,
    posts: Array<PostType>
}

let initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, text: "Hi, how are you?", likesCount: 1},
        {id: 2, text: "It's my first post.", likesCount: 3}
    ]}

export function profileReducer(state: ProfilePageType = initialState, action: PostsActionsType): ProfilePageType  {
    switch (action.type) {
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

export const addPostAC = () => ({
    type: 'ADD_POST'}) as const
export const updatePostTextAC = (newText: string) => ({
    type: 'UPDATE_NEW_POST_TEXT', newText}) as const
