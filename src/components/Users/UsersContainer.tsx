import {connect} from "react-redux";
import {DispatchType, StateType} from "../../Redux/redux-store";
import {followUnfollowAC, setUsersAC, UserType} from "../../Redux/users_reducer";
import {Users} from "./Users";

type MapDispatchType = {
    users: Array<UserType>
}

type UsersDispatchType = {
    followUnfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: StateType): MapDispatchType => ({
    users: state.usersPage.items
})

const mapDispatchToProps = (dispatch: DispatchType): UsersDispatchType => ({
    followUnfollow: (id: number) => dispatch(followUnfollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users))
})


export const UsersContainer =
    connect<MapDispatchType, UsersDispatchType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Users)