import {v1} from "uuid";

const ADD_POST = "ADD_POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type ActionsTypes = ReturnType<typeof addPost>
  | ReturnType<typeof changeNewText>
  | ReturnType<typeof setUserProfile>

export type ProfilePageType = {
  title: string
  descForNewPost: string
  posts: Array<PostType>
  profile: ApiUserProfileType
}
export type PostType = {
  id: string
  likes: number
  desc: string
}
export type ApiUserProfileType = {
  aboutMe: "good programmer"
  lookingForAJob: true
  lookingForAJobDescription: "good work"
  contacts: {
    github: "1234"
    vk: "1234"
    facebook: "1234"
    instagram: "1234"
    twitter: "1234"
    website: "1234"
    youtube: "1234"
    mainLink: "1234"
  }
  followed: true
  status: "not work"
  uniqueUrlName: "string"
  fullName: string
  userId: string
  photos: {
    small: string
    large: string
  }
}

export const addPost = () => {
  return { type: ADD_POST } as const
}
export const changeNewText = (newDesc: string) => {
  return { type: CHANGE_NEW_TEXT, descForNewPost: newDesc } as const
}
export const setUserProfile = (profile: ApiUserProfileType) => {
  return { type: SET_USER_PROFILE, profile } as const
}

const initialState: ProfilePageType = {
  title: "My posts",
  posts: [
    {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"}
  ] as PostType[],
  descForNewPost: "",
  profile: {
    fullName: "nataly",
    aboutMe: "good programmer",
    userId: "899",
    photos: {
      small: "https://gamerwall.pro/uploads/posts/2022-06/1655668285_2-gamerwall-pro-p-koti-na-more-priroda-krasivo-foto-3.jpg",
      large: "https://gamerwall.pro/uploads/posts/2022-06/1655668285_2-gamerwall-pro-p-koti-na-more-priroda-krasivo-foto-3.jpg",
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
    status: "not work",
    uniqueUrlName: "string"
  }
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost: PostType = {
        id: v1(),
        likes: 0,
        desc: state.descForNewPost
      }
      return {
        ...state,
        descForNewPost: "",
        posts: [...state.posts, newPost]
      }
    }
    case CHANGE_NEW_TEXT: {
      return {
        ...state,
        descForNewPost: action.descForNewPost
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default: {
      return state
    }
  }
}