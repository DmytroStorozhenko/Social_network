import React from 'react';
import classes from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://img.freepik.com/free-vector/gradient-geometric-shape-background_78532-307.jpg?size=626&ext=jpg"
                    alt="start_img"/>
            </div>
            <div className={classes.descriptionBlock}>
                <div>ava + description</div>
            </div>
        </div>
    )
}
