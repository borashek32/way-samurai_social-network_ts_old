import classes from "../Profile.module.sass"
import s from './../posts/Posts.module.sass'
import {ApiUserProfileType} from "../../../../redux/profile-reducer"
import {Preloader} from "../../../utils/preloader/Preloader"
import {ProfileStatus} from "./ProfileStatus"
import React, {ChangeEvent, useState} from "react"
import {ReduxProfileForm} from "./ProfileDataForm"

type ProfileInfoType = {
  profile: ApiUserProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (photo: File) => void
  saveProfileData: (formData: ApiUserProfileType) => Promise<any>
}

export const ProfileInfo = (props: ProfileInfoType) => {

  const [onEditMode, setOnEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const toggleEditMode = () => {
    setOnEditMode(!onEditMode)
  }

  const saveProfileData = (formData: ApiUserProfileType) => {
    props.saveProfileData(formData).then(() => setOnEditMode(!onEditMode))
  }

  return (
    <>
      <ProfileStatus
        isOwner={props.isOwner}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div className={classes.profile}>
        <div className={classes.profile__imgWrapper}>
          <img width="150px"
             className={classes.author__logo}
             src={props.profile.photos.small
               ? props.profile.photos.small
               : "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634__340.png"
             }
             alt={props.profile.fullName + ' image'}/>
          {props.isOwner &&
            <input
              type="file"
              style={{marginTop: "20px"}}
              onChange={onMainPhotoSelected}
            />}
        </div>

        {!onEditMode &&
        <div className={classes.profile__info}>
          <div className={classes.profile__item}>
            <p className={classes.profile__status}>Full Name:</p> {props.profile.fullName}
          </div>
          <div className={classes.profile__item}>
            <p className={classes.profile__status}>About Me:</p> {props.profile.aboutMe}
          </div>
          <div className={classes.profile__item}>
            <p className={classes.profile__status}>Looking for a job:</p>
            <input type="checkbox" readOnly checked={props.profile.lookingForAJob}/>
          </div>
          <div className={classes.profile__item}>
            <p className={classes.profile__status}>Skills:</p> {props.profile.lookingForAJobDescription}
          </div>
          <div className={classes.profile__item}>
            <p className={classes.profile__status}>Instagram:</p> {props.profile.contacts.instagram}
          </div>
          <div className={classes.profile__item}>
            <p className={classes.profile__status}>Facebook:</p> {props.profile.contacts.facebook}
          </div>
          <div className={classes.profile__item}>
            <p className={classes.profile__status}>Github:</p> {props.profile.contacts.github}
          </div>

          {props.isOwner && <button className={s.post__button} onClick={onEditMode ? () => saveProfileData : toggleEditMode}>
            Edit Profile
          </button>}
        </div>}

        {onEditMode && <ReduxProfileForm initialValues={props.profile} onSubmit={saveProfileData} />}
      </div>
    </>
  )
}