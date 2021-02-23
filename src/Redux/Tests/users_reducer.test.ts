import {followUnfollowAC, usersReducer, UsersPageType} from "../users_reducer";

let initialState: UsersPageType

beforeEach(() => {
    initialState = {
        items: [
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
            }
        ],
    }
})

test('user must be unfollowed', () => {
        const action = followUnfollowAC(2)

        const result = usersReducer(initialState, action)

        expect(result.items[0].followed).toBeFalsy()
        expect(result.items[1].followed).toBeTruthy()
        expect(result.items[1]).not.toEqual(initialState.items[1])
    }
)