import React from 'react';
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType, ProfilePageType} from "../../Redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: DispatchType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
}
