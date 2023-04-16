import classes from "../../profile/posts/post/Post.module.sass";
import s from "./User.module.sass"
import React from "react";
import {UserType} from "../../../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
  user: UserType
  follow: (userId: number | null) => void
  unfollow: (userId: number | null) => void
  // followingInProgress: Array<string>
  followingInProgress: any
}

export const User = (props: PropsType) => {

  return (
    <div className={s.userWrapper}>
      <div className={s.userContainer}>
        <NavLink to={"/profile/" + props.user.id} style={{display: "flex", gap: '50px'}}>
          <div className={s.user}>
            <img src={props.user.photos.small ?? "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&dpr=2&s=none"}
                 alt="avatar" className={s.user__ava}/>
          </div>
          <div className={classes.post__content}>
            <div className={s.user__name}>{props.user.name} {props.user.id}</div>
            <div className={s.user__info}>Status: {props.user.status}</div>
          </div>
        </NavLink>
      </div>
      <div className={s.user__buttons}>
        {!props.user.followed
          ? <button
            className={s.button}
            disabled={props.followingInProgress.some((id: number | null) => id === props.user.id)}
            onClick={() => {
              props.follow(props.user.id)
            }
            }>Follow</button>

          : <button
            className={s.button}
            disabled={props.followingInProgress.some((id: number | null) => id === props.user.id)}
            onClick={() => {
              props.unfollow(props.user.id)
            }
            }>Unfollow</button>
        }
      </div>
    </div>
  )
}