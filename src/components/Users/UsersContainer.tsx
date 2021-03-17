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
import {Users} from "./Users";
import {usersAPI} from "../../api/users_api";

type MapDispatchType = UsersPageType

class UsersContainer extends React.Component<UsersContainerProps> {
    componentDidMount() {
        this.props.setFetchingStatus()
        usersAPI.getUsers().then(response => {
            this.props.setFetchingStatus()
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setPagesCount(Math.ceil(response.data.totalCount / this.props.pageSize))
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetchingStatus()
        usersAPI.getCurrentPageUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setFetchingStatus()
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

export type UsersContainerProps = ConnectedProps<typeof UsersPage>

const UsersPage = connect(mapState,
    {
        followUnfollow,
        setCurrentPage,
        setPagesCount,
        setTotalUsersCount,
        setUsers,
        setFetchingStatus}
        )

export default UsersPage(UsersContainer)