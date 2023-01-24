const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_MAX_PAGE_COUNT = "SET_MAX_PAGE_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export type ActionsTypes = ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setMaxPageCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

export type UsersPageType = {
  title: string
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  maxPageCount: 10
  isFetching: boolean
  followingInProgress: boolean
}
export type UserType = {
  id: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
  uniqueUrlName: string
  name: string
  status: string
  followingInProgress: boolean
}

export const follow = (userId: string) => {
  return { type: FOLLOW, userId: userId } as const
}
export const unfollow = (userId: string) => {
  return { type: UNFOLLOW, userId: userId } as const
}
export const setUsers = (users: UserType[]) => {
  return { type: SET_USERS, users: users } as const
}
export const setCurrentPage = (currentPage: number) => {
  return { type: SET_CURRENT_PAGE, currentPage: currentPage } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
  return { type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount } as const
}
export const setMaxPageCount = (maxPageCount: number) => {
  return { type: SET_MAX_PAGE_COUNT, maxPageCount: maxPageCount } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
  return { type: TOGGLE_IS_FETCHING, isFetching: isFetching} as const
}
export const toggleFollowingProgress = (followingInProgress: boolean) => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: followingInProgress } as const
}

const initialState: UsersPageType = {
  title: "Users",
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  maxPageCount: 10,
  isFetching: true,
  followingInProgress: false
}

export const usersReducer = (state = initialState, action: ActionsTypes): UsersPageType => {
  switch (action.type) {
    case FOLLOW: {
      return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]}
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
      // debugger
      return {...state, followingInProgress: action.followingInProgress}
    }
    default: {
      return state
    }
  }
}