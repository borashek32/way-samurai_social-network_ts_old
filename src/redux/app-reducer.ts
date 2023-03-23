import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";


const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS "

export type ActionsTypes = ReturnType<typeof initializedSuccess>

export type InitialType = {
  initialized: boolean
}

const initialState: InitialType = {
  initialized: false
}

export const appReducer = (state = initialState, action: ActionsTypes): InitialType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true
      }
    }
    default: {
      return state
    }
  }
}

export const initializedSuccess = () => {
  return {type: INITIALIZED_SUCCESS}
}

export const initializeApp: any = () => (dispatch: Dispatch) => {
  let promise = dispatch(getAuthUserData())
  // debugger
  Promise.all([promise])
    dispatch(initializedSuccess())
}