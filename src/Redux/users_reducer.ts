type FollowUnfollowActionType = ReturnType<typeof followUnfollow>
type GetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetPagesCountType = ReturnType<typeof setPagesCount>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type setFetchingStatusType = ReturnType<typeof setFetchingStatus>

export type UsersActionsType =
    FollowUnfollowActionType |
    GetUsersActionType |
    SetCurrentPageType |
    SetPagesCountType |
    SetTotalUsersCountType |
    setFetchingStatusType

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
    isFetching: boolean
}

let initialState: UsersPageType = {
    items: [],
    currentPage: 1,
    pageSize: 10,
    pagesCount: 0,
    totalUsersCount: 0,
    isFetching: false
}

export function usersReducer(state = initialState, action: UsersActionsType): UsersPageType {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW': {
            return {
                ...state,
                items: state.items.map(item => item.id === action.id ? {...item, followed: !item.followed} : item)
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                items: [...action.users]
            }
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
        case "SET-FETCHING-STATUS": {
            return {
                ...state,
                isFetching: !state.isFetching
            }
        }
        default:
            return state
    }
}

export const followUnfollow = (id: number) => ({
    type: 'FOLLOW-UNFOLLOW', id
}) as const

export const setUsers = (users: Array<UserType>) => ({
    type: 'SET-USERS', users
}) as const

export const setCurrentPage = (currentPage: number) => ({
    type: 'SET-CURRENT-PAGE', currentPage
}) as const

export const setPagesCount = (pageCount: number) => ({
    type: 'SET-PAGES-COUNT-PAGE', pageCount
}) as const

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT-PAGE', totalUsersCount
}) as const

export const setFetchingStatus = () => ({
    type: 'SET-FETCHING-STATUS'
}) as const

