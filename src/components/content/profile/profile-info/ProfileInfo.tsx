import classes from "../Profile.module.sass";
import {ApiUserProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../utils/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
  profile: ApiUserProfileType
  status: string
  updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <>
      <ProfileStatus
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div className={classes.profile}>
        <div className={classes.profile__imgWrapper}>
          <img width="150px"
               className={classes.author__logo}
               src={props.profile.photos.small
                ? props.profile.photos.small
                : "https://gamerwall.pro/uploads/posts/2022-06/1655668285_2-gamerwall-pro-p-koti-na-more-priroda-krasivo-foto-3.jpg"}
               alt="img"/>
        </div>
        <div className={classes.profile__info}>
          <p className={classes.profile__item}>Nickname: {props.profile.uniqueUrlName}</p>
          <p className={classes.profile__item}>Full Name: {props.profile.fullName}</p>
          <p className={classes.profile__item}>Instagram: {props.profile.contacts.instagram}</p>
          <p className={classes.profile__item}>Facebook: {props.profile.contacts.facebook}</p>
          <p className={classes.profile__item}>Github: {props.profile.contacts.github}</p>
          <p className={classes.profile__item}>About Me: {props.profile.aboutMe}</p>
          <p className={classes.profile__item}>Work: {props.profile.lookingForAJob ? "already hired" : "looking for a job"}</p>
        </div>
      </div>
    </>
  )
}