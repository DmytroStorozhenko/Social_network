import {connect, ConnectedProps} from "react-redux";
import {DispatchType, StateType} from "../../Redux/redux-store";
import {
    followUnfollowAC,
    setCurrentPageAC,
    setPagesCountAC, setTotalUsersCountAC,
    setUsersAC,
    UsersPageType,
    UserType
} from "../../Redux/users_reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type MapDispatchType = UsersPageType

type UsersDispatchType = {
    followUnfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setPagesCount: (pageCount: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersContainer extends React.Component<UsersContainerProps> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setPagesCount(Math.ceil(response.data.totalCount / this.props.pageSize))
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pages: Array<number> = []
        for (let i = 1; i < this.props.pagesCount; i++) {
            pages[i - 1] = i
        }
        return (
            <Users
                pages={pages}
                users={this.props.items}
                currentPage={this.props.currentPage}
                followUnfollow={this.props.followUnfollow}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}

const mapState = (state: StateType): MapDispatchType => ({
    items: state.usersPage.items,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pagesCount: state.usersPage.pagesCount
})

const mapDispatch = (dispatch: DispatchType): UsersDispatchType => ({
    followUnfollow: (id: number) => dispatch(followUnfollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setPagesCount: (pageCount) => dispatch(setPagesCountAC(pageCount)),
    setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount))
})

const UsersPage = connect(mapState, mapDispatch)

export type UsersContainerProps = ConnectedProps<typeof UsersPage>

export default UsersPage(UsersContainer)