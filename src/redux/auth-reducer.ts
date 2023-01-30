import axios from "axios";
import {authAPI, usersApi} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET-USER-DATA"

export type ActionsTypes = ReturnType<typeof setAuthUserData>

export type UserType = {
  userId: string | null
  email: string | null
  login: string | null
  isFetching: boolean
  isAuth: boolean
}

const initialState: UserType = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
}

export const authReducer = (state = initialState, action: ActionsTypes): UserType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    default: {
      return state
    }
  }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null) => {
  return {type: SET_USER_DATA, data: {userId, email, login}} as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
  return () => {
    authAPI.me()
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data
          dispatch(setAuthUserData(id, email, login))
        }
      })
  }
}