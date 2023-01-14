import classes from "../../profile/posts/post/Post.module.sass";
import s from "./User.module.sass"
import React from "react";
import {UserType} from "../../../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
  user: UserType
  follow: (userId: string) => void
  unfollow: (userId: string) => void
}

export const User = (props: PropsType) => {
  // debugger
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
          ? <button className={s.button} onClick={() => props.follow(props.user.id)}>Follow</button>
          : <button className={s.button} onClick={() => props.unfollow(props.user.id)}>Unfollow</button>
        }
      </div>
    </div>
  )
}