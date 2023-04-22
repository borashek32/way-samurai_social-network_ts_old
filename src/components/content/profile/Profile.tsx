import {ProfileInfo} from "./profile-info/ProfileInfo"
import PostsContainer from "./posts/PostsContainer"
import {ApiUserProfileType, ProfilePageType} from "../../../redux/profile-reducer"

type PropsType = {
  profilePage: ProfilePageType
  profile: ApiUserProfileType
  status: string
  updateStatus: (status: string) => void
  isAuth: boolean
  isOwner: boolean
  savePhoto: (photo: File) => void
  saveProfileData: (formData: ApiUserProfileType) => Promise<any>
}

export const Profile = (props: PropsType) => {

  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfileData={props.saveProfileData}
      />
      <PostsContainer isOwner={props.isOwner} />
    </div>
  )
}