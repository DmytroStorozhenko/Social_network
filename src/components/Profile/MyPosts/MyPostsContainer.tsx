import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {DispatchType, StateType} from "../../../Redux/redux-store";
import {addPostAC, ProfilePageType, updatePostTextAC} from "../../../Redux/profile_reducer";

type MyPostsDispatchType = {
    postChange: (newValue: string) => void
    addPost: () => void
}

const mapStateToProps = (state: StateType): ProfilePageType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch: DispatchType): MyPostsDispatchType => ({
    postChange: (newValue: string) => dispatch(updatePostTextAC(newValue)),
    addPost: () => dispatch(addPostAC())
})

export const MyPostsContainer =
    connect<ProfilePageType, MyPostsDispatchType, {}, StateType>(mapStateToProps, mapDispatchToProps)(MyPosts)