import classes from "../profile/posts/Posts.module.sass";
import {UserType} from "../../../redux/users-reducer";
import {User} from "./user/User";
import React from "react";
import {UsersPagePropsType} from "./UsersContainer";

type PropsType = {
  usersPageType: UsersPagePropsType
  onPageChanged: (pageNumber: number) => void
}

export const Users = (props: PropsType) => {

  let pageCount: number = Math.ceil(props.usersPageType.totalUsersCount / props.usersPageType.pageSize)
  let pages = []
  for (let i = 1; i <= props.usersPageType.maxPageCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {
          pages.map(p => {
            return (
              <span
                key={p}
                className={props.usersPageType.currentPage === p ? classes.selectedPage : ''}
                onClick={(e) => props.onPageChanged(p)}
              >
                {p}
              </span>
            )
          })
        }
      </div>
      <div className={classes.posts}>
        <h2 className={classes.posts__header}>{props.usersPageType.usersPage.title}</h2>

        {
          props.usersPageType.usersPage.users.map((u: UserType) => {
            return (
              <User
                followingInProgress={props.usersPageType.followingInProgress}
                unfollow={props.usersPageType.unfollow}
                follow={props.usersPageType.follow}
                key={u.id}
                user={u}
              />
            )
          })}
      </div>
    </div>
  )
}