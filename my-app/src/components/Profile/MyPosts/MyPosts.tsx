import React, {ChangeEvent} from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {DispatchType, PostType} from "../../../Redux/store";
import {addPostAC, updatePostTextAC} from "../../../Redux/profile_reducer";

type PostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: DispatchType
}

export const MyPosts = (props: PostsPropsType) => {
    const postsElement = props.posts.map(post =>
        <Post text={post.text} likesCount={post.likesCount} key={post.id}/>)

    const addPost = () => {
        if (props.newPostText) props.dispatch(addPostAC())
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = event.currentTarget.value
        if (newValue) {
            props.dispatch(updatePostTextAC(newValue))
        }
    }

    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={onPostChange}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>
    )
}
