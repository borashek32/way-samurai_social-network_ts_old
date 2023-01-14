import classes from "../profile/posts/Posts.module.sass";
import React from "react";
import {User} from "../user/User";
import axios from "axios";
import {UserType} from "../../../../redux/users-reducer";
import {UsersPagePropsType} from "../UsersContainer";


export class Users extends React.Component<UsersPagePropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {

    let pageCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
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
                  className={this.props.currentPage === p ? classes.selectedPage : ''}
                  onClick={(e) => this.onPageChanged(p)}
                >
                  {p}
                </span>
              )
            })
          }
        </div>
        <div className={classes.posts}>
          <h2 className={classes.posts__header}>{this.props.usersPage.title}</h2>

          {
            this.props.usersPage.users.map((u: UserType) => {
            return (
              <User
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                key={u.id}
                user={u}
              />
            )
          })}
        </div>
      </div>
    )
  }
}