import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/api";

const ADD_POST = "profile/ADD_POST"
const REMOVE_POST = "profile/REMOVE_POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof removePostAC>

export type ProfilePageType = {
  title: string
  descForNewPost: string
  posts: Array<PostType>
  profile: ApiUserProfileType
  status: string
}
export type PostType = {
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


export const addPostAC = (descForNewPost: string) => ({type: ADD_POST, descForNewPost} as const)
export const removePostAC = (postId: string) => ({type: REMOVE_POST, postId} as const)
const setUserProfile = (profile: ApiUserProfileType) => ({type: SET_USER_PROFILE, profile} as const)
const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

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
        id: v1(),
        likes: 0,
        desc: action.descForNewPost
      }
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
    default: {
      return state
    }
  }
}