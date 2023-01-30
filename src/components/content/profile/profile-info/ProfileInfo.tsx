import classes from "../Profile.module.sass";
import {ApiUserProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../utils/preloader/Preloader";

type ProfileInfoType = {
  profile: ApiUserProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={classes.profile}>
      <div className={classes.profile__imgWrapper}>
        <img width="150px" className={classes.author__logo}
             src={
                    !props.profile.photos.small
                        ? "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        : props.profile.photos.small
                    }
             alt="cat"/>
      </div>
      <div className={classes.profile__info}>
        <p className={classes.profile__item}>Nickname: {props.profile.uniqueUrlName}</p>
        <p className={classes.profile__item}>Full Name: {props.profile.fullName}</p>
        <p className={classes.profile__item}>Instagram: {props.profile.contacts.instagram}</p>
        <p className={classes.profile__item}>Facebook: {props.profile.contacts.facebook}</p>
        <p className={classes.profile__item}>Github: {props.profile.contacts.github}</p>
        <p className={classes.profile__item}>About Me: {props.profile.aboutMe}</p>
        <p className={classes.profile__item}>Work: {props.profile.lookingForAJob ? "looking for a work" : "already hired"}</p>
      </div>
    </div>
  )
}