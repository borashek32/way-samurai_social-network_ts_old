import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/api";

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>

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
  userId: string
  photos: {
    small: string
    large: string
  }
}


export const addPostAC = (descForNewPost: string) => {
  return {type: ADD_POST, descForNewPost} as const
}
const setUserProfile = (profile: ApiUserProfileType) => {
  return {type: SET_USER_PROFILE, profile} as const
}
const setStatus = (status: string) => {
  return {type: SET_STATUS, status} as const
}

// thunks
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  usersApi.getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response.data))
      })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
  profileApi.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data))
      })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
  profileApi.updateStatus(status)
    .then(response => {
      if (response.data.codeResult === 0) dispatch(setStatus(status))
    })
}


const initialState: ProfilePageType = {
  title: "My posts",
  posts: [
    {
      id: v1(),
      likes: 10,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"
    },
    {
      id: v1(),
      likes: 10,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"
    },
    {
      id: v1(),
      likes: 10,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"
    },
    {
      id: v1(),
      likes: 10,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"
    },
    {
      id: v1(),
      likes: 10,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"
    },
    {
      id: v1(),
      likes: 10,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"
    }
  ] as PostType[],
  descForNewPost: "",
  profile: {
    fullName: "nataly",
    aboutMe: "hi there",
    userId: "",
    photos: {
      small: "",
      large: "",
    },
    lookingForAJob: true,
    lookingForAJobDescription: "good work",
    contacts: {
      github: "1234",
      vk: "1234",
      facebook: "1234",
      instagram: "1234",
      twitter: "1234",
      website: "1234",
      youtube: "1234",
      mainLink: "1234",
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