import {ProfileInfo} from "./profile-info/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";
import {ApiUserProfileType, ProfilePageType} from "../../../redux/profile-reducer";

type PropsType = {
  profilePage: ProfilePageType
  profile: ApiUserProfileType
}

export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <PostsContainer />
    </div>
  )
}