import React, {FC} from 'react';
import styles from "./ProfileInfo.module.css"
import {ProfileResponseType} from "../../../api/profile_api";

type ProfileInfoType = {
    profile: ProfileResponseType
}

export const ProfileInfo: FC<ProfileInfoType> = (props) => {
    let contacts = Object.entries(props.profile.contacts)
    let lookingForAJobDescription = props.profile.lookingForAJobDescription
    return (
        <div className={styles.profile}>
            <div className={styles.avatar}>
                <img src={props.profile.photos.large} alt="there should have been an avatar..."/>
            </div>
            <div className={styles.description}>
                <div>{props.profile.fullName}</div>
                <div>
                    <p>Looking for a job: <span>
                        <input type="checkbox" checked={props.profile.lookingForAJob}/>
                        {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </span>
                    </p>
                    <p>{lookingForAJobDescription &&
                        `about this: ${lookingForAJobDescription}`}</p>
                </div>
            </div>
            <div className={styles.contacts}>
                <h3>Contacts:</h3>
                <ul>
                    {contacts.map(item => (
                            item[1] && <li>
                                {`${item[0]}: `} <a href={item[1]}>{item[1]}</a>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}
