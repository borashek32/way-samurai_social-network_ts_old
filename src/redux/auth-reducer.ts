import {authAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET-USER-DATA"

export type ActionsTypes = ReturnType<typeof setAuthUserData>

export type UserType = {
  userId: number | null
  email: string | null
  login: string | null
  isFetching: boolean
  isAuth: boolean
  password: string | null
}

const initialState: UserType = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  password: null
}

export const authReducer = (state = initialState, action: ActionsTypes): UserType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        isAuth: true
      }
    }
    default: {
      return state
    }
  }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
  return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
}

export const getAuthUserData: any = () => (dispatch: Dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      const { id, email, login } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  })
}

export const login = (email: string, password: string, rememberMe = false) => (dispatch: Dispatch) => {
  authAPI.login(email, password, rememberMe, true)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      }
  })
}

export const logout = () => (dispatch: Dispatch) => {
  authAPI.logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}