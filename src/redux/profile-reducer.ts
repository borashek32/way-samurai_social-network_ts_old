import {PostType, ProfilePageType} from "./store";
import {v1} from "uuid";

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof changeNewTextActionCreator>

export const addPostActionCreator = (desc: string) => {
  return {
    type: "ADD_POST",
    desc: desc
  } as const
}
export const changeNewTextActionCreator = (newDesc: string) => {
  return {
    type: "CHANGE_NEW_TEXT",
    descForNewPost: newDesc
  } as const
}

const initialState = {
  title: "My posts",
  descForNewPost: "",
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
  ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: any) => {
  if (action.type === "ADD_POST") {
    const newPost: PostType = {
      id: v1(),
      likes: 0,
      desc: action.desc
    }
    state.posts.push(newPost)
    state.descForNewPost = ""
    return {...state}
  } else if (action.type === "CHANGE_NEW_TEXT") {
    console.log(action.type)
    return {...state, descForNewPost: action.descForNewPost}
  }
  return state
}