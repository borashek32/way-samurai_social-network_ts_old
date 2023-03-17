import { UserType } from './auth-reducer';
import { createSelector } from "reselect";
import {AppStateType} from "./redux-store";

export const getUsersPageTitle = (state: AppStateType) => {
  return state.usersPage.title
}
export const getUsersSuperSelector = (state: AppStateType) => {
  return state.usersPage.users
}
export const getUsersPage = createSelector(getUsersSuperSelector,(users) => {
  return users.filter(u => true)
})
export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}
export const getMaxPageCount = (state: AppStateType) => {
  return state.usersPage.maxPageCount
}
export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress
}



// RESELECT
// export const getUsersPage = (state: AppStateType) => {
//   return state.usersPage.users
// }
// export const getUsersSelector = (state: AppStateType) => {
//   return getUsersPage(state).filter(u => true)
// }
// export const getUsersSuperSelector = createSelector(getUsersPage,(users) => {
//   return users.filter(u => true)
// })