import classes from "../../profile/posts/Posts.module.sass";
import React from "react";
import {UsersPagePropsType} from "../UsersContainer";
import {User} from "../user/User";
import axios from "axios";
export type PropsType = UsersPagePropsType

export const Users = (props: UsersPagePropsType) => {
  const getUsers = () => {
    if (props.usersPage.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)
      })
    }
  }

  return (
    <div className={classes.posts}>
      <button onClick={getUsers}>get users</button>
      <h2 className={classes.posts__header}>{props.usersPage.title}</h2>

      {props.usersPage.users.map((u) => {
        return (
          <User
            unfollow={props.unfollow}
            follow={props.follow}
            key={u.id}
            user={u}
          />
        )
      })}
    </div>
  )
}