import classes from "../Profile.module.sass";
import {ApiUserProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../utils/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ChangeEvent} from "react";

type ProfileInfoType = {
  profile: ApiUserProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (photo: File) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
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
               : "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&dpr=2&s=none"
             }
             alt={props.profile.fullName + ' image'}/>
          {props.isOwner &&
            <input
              type="file"
              style={{marginTop: "20px"}}
              onChange={onMainPhotoSelected}
            />}
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