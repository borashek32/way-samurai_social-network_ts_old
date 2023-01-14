import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow,
  UsersPageType,
  UserType
} from "../../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../utils/preloader/Preloader";

type MapStatePropsType = {
  usersPage: UsersPageType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  maxPageCount: number
  isFetching: boolean
}
type MapDispatchToProps = {
  follow: (userId: string) => void
  unfollow: (userId: string) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchToProps

class UsersComponent extends React.Component<UsersPagePropsType> {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    maxPageCount: state.usersPage.maxPageCount,
    isFetching: state.usersPage.isFetching
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
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
}) (UsersComponent)