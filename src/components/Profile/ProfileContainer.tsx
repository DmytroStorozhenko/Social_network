import {connect, ConnectedProps} from "react-redux";
import {MyPosts} from "./MyPosts/MyPosts";
import {StateType} from "../../Redux/redux-store";
import {addPost, ProfilePageType, setProfile, updatePostText} from "../../Redux/profile_reducer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {profileAPI} from "../../api/profile_api";
import {Preloader} from "../Common/Preloader";
import {RouteComponentProps, withRouter } from "react-router-dom";

class ProfileContainer extends React.Component<ProfileContainerProps> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        profileAPI.getProfile(userId).then(response => {
            this.props.setProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                {!this.props.profile ?
                    <Preloader/> :
                    <div>
                        <ProfileInfo
                            profile={this.props.profile}/>
                        <MyPosts
                            posts={this.props.posts}
                            newPostText={this.props.newPostText}
                            addPost={this.props.addPost}
                            updatePostText={this.props.updatePostText}
                        />
                    </div>
                }
            </div>
        )
    }
}

const mapState = (state: StateType): ProfilePageType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

type ConnectProps = ConnectedProps<typeof ProfilePage>

const ProfilePage = connect(mapState, {
        setProfile,
        updatePostText,
        addPost
    }
)

type PathParamType = {
    userId: string
}

type ProfileContainerProps = RouteComponentProps<PathParamType> & ConnectProps

const ProfileWithRouter = withRouter(ProfileContainer)

export default ProfilePage(ProfileWithRouter)
