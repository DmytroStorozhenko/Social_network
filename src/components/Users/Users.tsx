import React from 'react';
import {UserType} from "../../Redux/users_reducer";
import axios from "axios";
import styles from "./Users.module.css"
import userPhoto from "../../accets/user_avatar_small.png"

type UsersType = {
    users: Array<UserType>
    followUnfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

export class Users extends React.Component<UsersType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
    return (
        <div>
            <div>
                {this.props.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div className={styles.userAvatar}>
                                    <img src={user.photos.small ? user.photos.small : userPhoto} alt="UserLogo" />
                                </div>
                                <div>
                                    {user.followed ? (
                                        <button onClick={() => {
                                                this.props.followUnfollow(user.id);
                                            }}
                                        >Unfollow
                                        </button>
                                    ) : (
                                        <button onClick={() => {
                                                this.props.followUnfollow(user.id);
                                            }}
                                        >
                                            Follow
                                        </button>
                                    )}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
}