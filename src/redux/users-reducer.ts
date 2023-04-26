import {AnyAction, Dispatch} from "redux";
import {usersApi} from "../api/api";
import {AxiosResponse} from "axios";

const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET_USERS"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT"
const SET_MAX_PAGE_COUNT = "users/SET_MAX_PAGE_COUNT"
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS"

export type ActionsTypes = ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setMaxPageCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number | null) => {
  return {type: FOLLOW, userId: userId} as const
}
export const unfollowSuccess = (userId: number | null) => {
  return {type: UNFOLLOW, userId: userId} as const
}
export const setUsers = (users: UserType[]) => {
  return {type: SET_USERS, users: users} as const
}
export const setCurrentPage = (currentPage: number) => {
  return {type: SET_CURRENT_PAGE, currentPage: currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
  return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount} as const
}
export const setMaxPageCount = (maxPageCount: number) => {
  return {type: SET_MAX_PAGE_COUNT, maxPageCount: maxPageCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
  return {type: TOGGLE_IS_FETCHING, isFetching: isFetching} as const
}
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number | null) => {
  return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: followingInProgress, userId: userId} as const
}

export type UsersPageType = {
  title: string
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  maxPageCount: 10
  isFetching: boolean
  followingInProgress: any
}
export type UserType = {
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
  uniqueUrlName: string
  name: string
  status: string
  followingInProgress: Array<string>
}
const initialState: UsersPageType = {
  title: "Users",
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  maxPageCount: 10,
  isFetching: true,
  followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionsTypes): UsersPageType => {
  switch (action.type) {
    case FOLLOW: {
      return {...state,
        users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]
      }
    }
    case UNFOLLOW: {
      return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]}
    }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalUsersCount}
    }
    case SET_MAX_PAGE_COUNT: {
      return {...state, maxPageCount: state.maxPageCount}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id: number | null) => id !== action.userId)
      }
    }
    default: {
      return state
    }
  }
}

export const requestUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    const response = await usersApi.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(setCurrentPage(currentPage))
  }
}

export const followUnfollowFlow = async (dispatch: Dispatch, userId: number | null, apiMethod: (userId: number | null) => Promise<AxiosResponse<any, any>>, actionCreator: (userId: number | null) => AnyAction) => {
  dispatch(toggleFollowingProgress(true, userId))
  const response = await apiMethod(userId)

  if (response.data.resultCode === 0) dispatch(actionCreator(userId))
  dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId: number | null) => {
  return async (dispatch: Dispatch) => followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), followSuccess)
}
export const unfollow = (userId: number | null) => {
  return async (dispatch: Dispatch) => followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), unfollowSuccess)
}