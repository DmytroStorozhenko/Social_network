import React, {ChangeEvent} from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/profile_reducer";

type PostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updatePostText: (newValue: string) => void
}

export const MyPosts = (props: PostsPropsType) => {
    const postsElement = props.posts.map(post =>
        <Post text={post.text} likesCount={post.likesCount} key={post.id}/>)

    const onAddPost = () => {
        if (props.newPostText) props.addPost()
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = event.currentTarget.value
        debugger
        if (newValue) {
            props.updatePostText(newValue)
        }
    }

    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={onPostChange}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>
    )
}
