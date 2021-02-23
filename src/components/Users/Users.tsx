import React, {FC} from 'react';
import styles from "./Users.module.css"
import userPhoto from "../../accets/user_avatar_small.png"
import {UserType} from "../../Redux/users_reducer";

type UsersPropsType = {
    users: Array<UserType>
    pages: Array<number>
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followUnfollow: (id: number) => void
}

export const Users: FC<UsersPropsType> = (props) => {
        return (
            <React.Fragment>
                <div>
                    {
                        props.pages.map(page => {
                                return <span
                                    className={`${styles.page} ${props.currentPage === page ? styles.currentPage :  ''}`}
                                    onClick={() => props.onPageChanged(page)}>
                            {page}
                        </span>
                            }
                        )
                    }
                </div>
                <div>
                    {props.users.map((user) => {
                        return (
                            <div key={user.id}>
                            <span>
                                <div className={styles.userAvatar}>
                                    <img src={user.photos.small ? user.photos.small : userPhoto} alt="UserLogo"/>
                                </div>
                                <div>
                                    {user.followed ? (
                                        <button onClick={() => {
                                            props.followUnfollow(user.id);
                                        }}
                                        >Unfollow
                                        </button>
                                    ) : (
                                        <button onClick={() => {
                                            props.followUnfollow(user.id);
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
            </React.Fragment>
        )
    }
