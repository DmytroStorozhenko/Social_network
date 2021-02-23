type FollowUnfollowActionType = ReturnType<typeof followUnfollowAC>
type GetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
type SetPagesCountType = ReturnType<typeof setPagesCountAC>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>

export type UsersActionsType =
    FollowUnfollowActionType |
    GetUsersActionType |
    SetCurrentPageType |
    SetPagesCountType |
    SetTotalUsersCountType

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
    currentPage: number
    pageSize: number
    pagesCount: number
    totalUsersCount: number
 }

let initialState: UsersPageType = {
    items: [],
    currentPage: 1,
    pageSize: 10,
    pagesCount: 0,
    totalUsersCount: 0
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
            items: [...action.users]}
        }

        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-PAGES-COUNT-PAGE": {
            return {
                ...state,
                pagesCount: action.pageCount
            }
        }
        case "SET-TOTAL-USERS-COUNT-PAGE": {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        default:
            return state
    }
}

export const followUnfollowAC = (id: number) => ({
    type: 'FOLLOW-UNFOLLOW', id}) as const

export const setUsersAC = (users: Array<UserType>) => ({
    type: 'SET-USERS', users}) as const

export const setCurrentPageAC = (currentPage: number) => ({
    type: 'SET-CURRENT-PAGE', currentPage}) as const

export const setPagesCountAC = (pageCount: number) => ({
    type: 'SET-PAGES-COUNT-PAGE', pageCount}) as const

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT-PAGE', totalUsersCount}) as const

