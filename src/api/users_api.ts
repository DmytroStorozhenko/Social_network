import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '54ca7025-138d-404e-bb10-b393f2399e64'
    }
})

export type UserType = {
    id: number
    name: string
    status: string | null
    photos: {
        small: string | null
        large: string | null
    },
    followed: boolean
}

export type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export const usersAPI = {
    getUsers() {
        return instance.get<UsersResponseType>(`users`)
    },
    getCurrentPageUsers( pageSize: number, pageNumber: number) {
        return instance.get<UsersResponseType>(`users?page=${pageSize}&count=${pageNumber}`)
    }
}
