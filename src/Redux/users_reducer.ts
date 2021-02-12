type FollowUnfollowActionType = ReturnType<typeof followUnfollowAC>
type getUsersActionType = ReturnType<typeof setUsersAC>

export type UsersActionsType = FollowUnfollowActionType | getUsersActionType

export type UserType = {
    name: string
    id: number,
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    followed: boolean
}

export type UsersPageType = {
    items: Array<UserType>
   /* totalCount: number
    error: string | null*/
}

let initialState: UsersPageType = {
    items: [/*
        {
            name: "Shubert",
            id: 1,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: "Hacker",
            id: 2,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        }*/
    ]/*,
    totalCount: 30,
    error: null*/
}

export function usersReducer(state = initialState, action: UsersActionsType): UsersPageType {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW': {
            return {
                ...state,
                items: state.items.map(item => item.id === action.id? {...item, followed: !item.followed} : item)
            }
        }
        case "SET-USERS": {
            return {
                ...state,
            items: [...state.items, ...action.users]}
        }

        default:
            return state
    }
}

export const followUnfollowAC = (id: number) => ({
    type: 'FOLLOW-UNFOLLOW', id
}) as const

export const setUsersAC = (users: Array<UserType>) => ({
    type: 'SET-USERS', users}) as const
