import {connect, ConnectedProps} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {
    followUnfollow,
    setCurrentPage, setFetchingStatus,
    setPagesCount, setTotalUsersCount,
    setUsers,
    UsersPageType,
} from "../../Redux/users_reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type MapDispatchType = UsersPageType

export class UsersContainer extends React.Component<UsersContainerProps> {
    componentDidMount() {
        this.props.setFetchingStatus()
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setPagesCount(Math.ceil(response.data.totalCount / this.props.pageSize))
            this.props.setFetchingStatus()
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setFetchingStatus()
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setFetchingStatus()
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
                isFetching={this.props.isFetching}
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
    pagesCount: state.usersPage.pagesCount,
    isFetching: state.usersPage.isFetching
})

const UsersPage = connect(mapState,
    {followUnfollow, setCurrentPage,setPagesCount, setTotalUsersCount, setUsers, setFetchingStatus})

export type UsersContainerProps = ConnectedProps<typeof UsersPage>

export default UsersPage(UsersContainer)