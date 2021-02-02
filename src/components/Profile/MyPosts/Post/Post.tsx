import React, {FC} from 'react';
import styles from "./Post.module.css"

type PostPropsType = {
    text: string
    likesCount: number
}
export const Post:FC<PostPropsType> = (props) => {
    return (
        <div>
            <div className={styles.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMI6hO5A5oIRu15LZeIuT7ID2KFn6ldPorg&usqp=CAU"
                    alt="avatar"
                    className={styles.avatar}/>
                <div>{props.text}</div>
                <div className={styles.like}>
                    <span>&#128077; </span>{props.likesCount}
                </div>
            </div>
        </div>
    )
}
