import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
  follow, getUsers, setCurrentPage,
  toggleFollowingProgress, unfollow, UsersPageType, UserType
}
  from "../../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../../utils/preloader/Preloader";

type MapStatePropsType = {
  usersPage: UsersPageType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  maxPageCount: number
  isFetching: boolean
  followingInProgress: Array<string>
  isAuth: boolean
}
type MapDispatchToProps = {
  follow: (userId: string) => void
  unfollow: (userId: string) => void
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
                                                 isAuth: boolean
} => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    maxPageCount: state.usersPage.maxPageCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
  }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//   return {
//     follow: (userId: string) => {
//       dispatch(followActionCreator(userId))
//     },
//     unfollow: (userId: string) => {
//       dispatch(unfollowActionCreator(userId))
//     },
//     setUsers: (users: UserType[]) => {
//       dispatch(setUsersActionCreator(users))
//     },
//     setCurrentPage: (pageNumber: number) => {
//       dispatch(setCurrentPageActionCreator(pageNumber))
//     },
//     setTotalUsersCount: (totalUsersCount: number) => {
//       dispatch(setTotalUsersCountActionCreator(totalUsersCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(toggleIsFetchingActionCreator(isFetching))
//     }
//   }
// }

// вместо того, что сверху закомменчено
// однотипные функции можно записать короче, как ниже
export default connect(mapStateToProps, {
  // follow: followActionCreator,
  // unfollow: unfollowActionCreator,
  // setUsers: setUsersActionCreator,
  // setCurrentPage: setCurrentPageActionCreator,
  // setTotalUsersCount: setTotalUsersCountActionCreator,
  // toggleIsFetching: toggleIsFetchingActionCreator

  // если названия одинаковые и справа и слева, то можно писать только то, что справа
  // да и во всех action creators поудалять в конце ActionCreator
  // и в другом файле тоже удалить последние слова в названиях
  follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
}) (UsersComponent)