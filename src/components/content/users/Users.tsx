import classes from "../profile/posts/Posts.module.sass";
import {UserType} from "../../../redux/users-reducer";
import {User} from "./user/User";
import React from "react";
import {UsersPagePropsType} from "./UsersContainer";
import {Paginator} from "./../../utils/pagination/Paginator";

type PropsType = {
  usersPageType: UsersPagePropsType
  onPageChanged: (pageNumber: number) => void
}

export const Users = (props: PropsType) => {

  return (
    <>
      <div>
        <Paginator
          onPageChanged={props.onPageChanged}
          currentPage={props.usersPageType.currentPage}
          totalUsersCount={props.usersPageType.totalUsersCount}
          maxPageCount={props.usersPageType.maxPageCount}
          pageSize={props.usersPageType.pageSize}
        />
      </div>
      <div className={classes.posts}>
        <h2 className={classes.posts__header}>{props.usersPageType.title}</h2>

        {
          props.usersPageType.users.map((u: UserType) => {
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
    </>
  )
}