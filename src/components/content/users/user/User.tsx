import classes from "../../profile/posts/post/Post.module.sass";
import s from "./User.module.sass"
import React from "react";
import {UserType} from "../../../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
  user: UserType
  follow: (userId: string) => void
  unfollow: (userId: string) => void
  followingInProgress: Array<string>
}

export const User = (props: PropsType) => {

  return (
    <div className={s.userWrapper}>
      <div className={s.userContainer}>
        <NavLink to={"/profile/" + props.user.id}>
          <div className={s.user}>
            <img src={props.user.photos.large} alt="avatar" className={s.user__ava}/>
          </div>
        </NavLink>
        <div className={classes.post__content}>
          <div className={s.user__name}>{props.user.name} {props.user.id}</div>
          <div className={s.user__info}>Status: {props.user.status}</div>
        </div>
      </div>
      <div className={s.user__buttons}>
        {!props.user.followed
          ? <button
              className={s.button}
              disabled={props.followingInProgress.some(id => id === props.user.id)}
              onClick={() => {
                props.follow(props.user.id)
              }
          }>Follow</button>

          : <button
              className={s.button}
              disabled={props.followingInProgress.some(id => id === props.user.id)}
              onClick={() => {
                props.unfollow(props.user.id)
              }
          }>Unfollow</button>
        }
      </div>
    </div>
  )
}