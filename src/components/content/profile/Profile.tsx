import {ProfileInfo} from "./profile-info/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";
import {ApiUserProfileType, ProfilePageType} from "../../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type PropsType = {
  profilePage: ProfilePageType
  profile: ApiUserProfileType
  status: string
  updateStatus: (status: string) => void
  isAuth: boolean
}

export const Profile = (props: PropsType) => {
  (props.isAuth, "PROFILE IS AutH")

  // if (!props.isAuth) {
  //   return <Redirect to={'/way-samurai_social-network_ts_old/login'} />
  // }

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