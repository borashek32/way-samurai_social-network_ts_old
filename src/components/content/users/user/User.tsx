import classes from "../../profile/posts/post/Post.module.sass";
import s from "./User.module.sass"
import React from "react";
import {UserType} from "../../../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
  user: UserType
  follow: (userId: string) => void
  unfollow: (userId: string) => void
  followingInProgress: boolean
  toggleFollowingInProgress: (followingInProgress: boolean) => void
}

export const User = (props: PropsType) => {

  return (
    <div className={s.userWrapper}>
      <div className={s.userContainer}>
        <NavLink to={"/profile/" + props.user.id}>
          <div className={s.user}>
            {
              props.user.photos.small
                ? <img src={props.user.photos.large} alt="avatar" className={s.user__ava}/>
                : <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.
              3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                       alt="avatar" className={s.user__ava}/>
            }
          </div>
        </NavLink>
        <div className={classes.post__content}>
          <div className={s.user__name}>{props.user.name}</div>
          <div className={s.user__info}>Status: {props.user.status}</div>
          <div className={s.user__info}>Location: Turkey, Alanya</div>
        </div>
      </div>
      <div className={s.user__buttons}>
        {!props.user.followed
          ? <button
              className={s.button}
              disabled={props.followingInProgress}
              onClick={() => {

                console.log(props)
                console.log(props.toggleFollowingInProgress)
                console.log(props.user.followingInProgress)
                props.toggleFollowingInProgress(true)

            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {},{
              withCredentials: true,
              headers: {
                "API-KEY": "46b63e5a-3617-4795-b158-8f82fffd20f6"
              }
            })
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.follow(props.user.id)
                }
                props.toggleFollowingInProgress(false)
              })
          }
          }>Follow</button>

          : <button
              className={s.button}
              disabled={props.followingInProgress}
              onClick={() => {

            props.toggleFollowingInProgress(true)

            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
              withCredentials: true,
              headers: {
                "API-KEY": "46b63e5a-3617-4795-b158-8f82fffd20f6"
              }
            })
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.unfollow(props.user.id)
                }
                props.toggleFollowingInProgress(false)
              })
            }
          }>Unfollow</button>
        }
      </div>
    </div>
  )
}