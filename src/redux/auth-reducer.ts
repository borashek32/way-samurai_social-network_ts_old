import {authAPI, securityApi} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";
import {ApiUserProfileType} from "./profile-reducer";

const SET_USER_DATA = "auth/SET-USER-DATA"
const GET_CAPTCHA_URL = "auth/GET_CAPTCHA_URL"

export type ActionsTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

export type UserType = {
  userId: number | null
  email: string | null
  login: string | null
  isFetching: boolean
  isAuth: boolean
  password: string | null
  isOwner: boolean
  captchaUrl: string | null
}

const initialState: UserType = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  password: null,
  isOwner: false,
  captchaUrl: null
}

export const authReducer = (state = initialState, action: ActionsTypes): UserType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state, ...action.payload
      }
    }
    case GET_CAPTCHA_URL: {
      return {
        ...state, captchaUrl: action.payload.url
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
  isAuth: boolean,
) => {
  return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
}
export const getCaptchaUrlSuccess = (url: string) => ({type: GET_CAPTCHA_URL, payload: {url}})

export const getAuthUserData: any = () => async (dispatch: Dispatch) => {
  const response = await authAPI.me()
  if (response.data.resultCode === 0) {
    const {id, email, login} = response.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
  else setAuthUserData(null,null,null,false)
}

export const login = (email: string, password: string, rememberMe = false, captcha: string | null) =>
  async (dispatch: ThunkDispatch<ApiUserProfileType, unknown, AnyAction>) => {

  const response = await authAPI.login(email, password, rememberMe, captcha, true)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10) {
      await dispatch(getCaptchaUrl())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
      dispatch(stopSubmit("login", {_error: message}))
    }
  }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
  const response = await securityApi.getCaptchaUrl()
  dispatch(getCaptchaUrlSuccess(response.data.url))
}

export const logout = () => async (dispatch: Dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}