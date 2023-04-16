import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA"

export type ActionsTypes = ReturnType<typeof setAuthUserData>

export type UserType = {
  userId: number | null
  email: string | null
  login: string | null
  isFetching: boolean
  isAuth: boolean
  password: string | null
  isOwner: boolean
}

const initialState: UserType = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  password: null,
  isOwner: false
}

export const authReducer = (state = initialState, action: ActionsTypes): UserType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state, ...action.payload
        // userId: action.payload.userId,
        // email: action.payload.email,
        // login: action.payload.login,
        // isAuth: action.payload.isAuth
      }
    }
    default: {
      return state
    }
  }
}

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
}

export const getAuthUserData: any = () => async (dispatch: Dispatch) => {
  const response = await authAPI.me()
  if (response.data.resultCode === 0) {
    const {id, email, login} = response.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
  else setAuthUserData(null,null,null,false)
}

export const login = (email: string, password: string, rememberMe = false) => async (dispatch: Dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, true)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
    dispatch(stopSubmit("login", {_error: message}))
  }
}

export const logout = () => async (dispatch: Dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}