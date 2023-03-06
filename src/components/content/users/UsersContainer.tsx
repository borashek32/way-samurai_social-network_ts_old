import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow, UsersPageType, UserType} from "../../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../../utils/preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
  usersPage: UsersPageType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  maxPageCount: number
  isFetching: boolean
  followingInProgress: Array<string>
}
type MapDispatchToProps = {
  follow: (userId: number | null) => void
  unfollow: (userId: number | null) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchToProps

class UsersComponent extends React.Component<UsersPagePropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <>
        {
          this.props.isFetching ? <Preloader /> : null
        }
        <Users usersPageType={this.props}
               onPageChanged={this.onPageChanged}
        />
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): { maxPageCount: 10;
                                                 usersPage: UsersPageType;
                                                 followingInProgress: Array<string>;
                                                 totalUsersCount: number;
                                                 pageSize: number;
                                                 isFetching: boolean;
                                                 currentPage: number;
} => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    maxPageCount: state.usersPage.maxPageCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
  })
)(UsersComponent)