import {PostType, ProfilePageType, sendMessageActionCreator, updateMessageActionCreator} from "./state";
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
    newDesc: newDesc
  } as const
}

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  if (action.type === "ADD_POST") {
    const newPost: PostType = {
      id: v1(),
      likes: 0,
      desc: action.desc
    }
    state.posts.push(newPost)
    state.descForNewPost = ""

  } else if (action.type === "CHANGE_NEW_TEXT") {
    state.descForNewPost = action.newDesc
  }
  return state
}