import {v1} from "uuid";
import {AnyAction, Dispatch} from "redux";
import {profileApi, usersApi} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";


const ADD_POST = "profile/ADD_POST"
const REMOVE_POST = "profile/REMOVE_POST"
const SAVE_POST = "profile/SAVE_POST"
const SET_IS_PUBLISHED = "profile/SET_IS_PUBLISHED"

const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const SAVE_PHOTO = "profile/SAVE_PHOTO"

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof removePostAC>
  | ReturnType<typeof savePhotoAC>
  | ReturnType<typeof setIsPublished>
  | ReturnType<typeof savePostAC>

export type ProfilePageType = {
  title: string
  descForNewPost: string
  posts: Array<PostType>
  profile: ApiUserProfileType
  status: string
}
export type PostType = {
  userId: number | null
  isPublished: boolean
  id: string
  likes: number
  desc: string
}
export type PhotoType = {
  small: string
  large: string
}
export type ApiUserProfileType = {
  aboutMe: string
  lookingForAJob: true
  lookingForAJobDescription: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  followed: true
  uniqueUrlName: string
  fullName: string
  userId: number | null
  photos: PhotoType
}


export const addPostAC = (formData: {descForNewPost: string}, authenticatedUserId: number | null) =>
  ({type: ADD_POST, formData, authenticatedUserId} as const)
export const removePostAC = (postId: string) => ({type: REMOVE_POST, postId} as const)
export const setIsPublished = (isPublished: boolean, postId: string) => ({type: SET_IS_PUBLISHED, isPublished, postId} as const)
export const savePostAC = (post: PostType) => ({type: SAVE_POST, post} as const)
const setUserProfile = (profile: ApiUserProfileType) => ({type: SET_USER_PROFILE, profile} as const)
const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
const savePhotoAC = (photo: PhotoType) => ({type: SAVE_PHOTO, photo} as const)

// thunks
export const getUserProfile = (userId: number | null) => async (dispatch: Dispatch) => {
  const response = await usersApi.getProfile(userId)
  dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number | null) => async (dispatch: Dispatch) => {
  const response = await profileApi.getStatus(userId)
  dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
  const response = await profileApi.updateStatus(status)
  if (response.data.codeResult === 0) dispatch(setStatus(status))
}
export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {
  const response = await profileApi.savePhoto(photo)
  if (response.data.resultCode === 0) dispatch(savePhotoAC(response.data.data.photos))
}
export const saveProfileData = (formData: ApiUserProfileType) => async (dispatch: ThunkDispatch<ApiUserProfileType, unknown, AnyAction>, getState: () => AppStateType) => {
  const response = await profileApi.saveProfileData(formData)
  if (response.data.resultCode === 0) {
    await dispatch(getUserProfile(getState().auth.userId))
  } else {
    dispatch(stopSubmit("profile", {
      _error: response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
    }))
    return Promise.reject(response.data.messages[0])
  }
}


const initialState: ProfilePageType = {
  title: "My posts",
  posts: [] as PostType[],
  descForNewPost: "",
  profile: {
    fullName: "",
    aboutMe: "",
    userId: null,
    photos: {
      small: "",
      large: "",
    },
    lookingForAJob: true,
    lookingForAJobDescription: "",
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
    },
    followed: true,
    uniqueUrlName: "string"
  },
  status: "",
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost: PostType = {
        userId: action.authenticatedUserId,
        isPublished: false,
        id: v1(),
        likes: 0,
        desc: action.formData.descForNewPost
      }
      debugger
      return {
        ...state,
        descForNewPost: "",
        posts: [...state.posts, newPost]
      }
    }
    case REMOVE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    }
    case SET_IS_PUBLISHED: {
      return {
        ...state,
        posts: state.posts.map(p => p.id === action.postId ? {...p, isPublished: action.isPublished} : p)
      }
    }
    case SAVE_POST: {
      return {
        ...state,
        posts: state.posts.map(p => p.id === action.post.id ? {...p, desc: action.post.desc} : p)
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case SAVE_PHOTO: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photo
        }
      }
    }
    default: {
      return state
    }
  }
}