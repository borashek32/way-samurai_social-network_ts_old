import {ProfileInfo} from "./profile-info/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";
import {ApiUserProfileType, ProfilePageType} from "../../../redux/profile-reducer";

type PropsType = {
  profilePage: ProfilePageType
  profile: ApiUserProfileType
  status: string
  updateStatus: (status: string) => void
}

export const Profile = (props: PropsType) => {

  console.log(props)

  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <PostsContainer />
    </div>
  )
}