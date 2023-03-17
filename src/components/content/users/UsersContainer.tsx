import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow, 
  UserType} from "../../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../../utils/preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching, getMaxPageCount, getPageSize, 
  getTotalUsersCount, getUsersPageTitle, getUsersPage} from "../../../redux/users-selectors";


type MapStatePropsType = {
  users: UserType[]
  title: string
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
  requestUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchToProps

class UsersComponent extends React.Component<UsersPagePropsType> {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
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

const mapStateToProps = (state: AppStateType) => {
  return {
    // users: getUsersPage(state),
    users: getUsersPage(state),
    title: getUsersPageTitle(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    maxPageCount: getMaxPageCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers
  })
)(UsersComponent)