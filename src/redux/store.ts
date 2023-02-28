import {v1} from "uuid"
import {addPost, changeNewText} from './profile-reducer'
import {dialogsReducer, sendMessageActionCreator, updateMessageActionCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type MessageType = {
  id: string
  text: string
}
type DialogType = {
  id: string
  userName: string
  text: string
}
type PostType = {
  id: string
  likes: number
  desc: string
}
type ProfilePageType = {
  title: string
  descForNewPost: string
  posts: Array<PostType>
}
type DialogPageType = {
  dialogsTitle: string
  dialogs: Array<DialogType>
  messagesTitle: string
  messages: Array<MessageType>
  newMessageBody: string
}
export type SidebarType = {}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: SidebarType
}
export type StoreType = {
  _state: RootStateType
  _rerenderEntireTree: () => void
  subscribe: (callback: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPost>
  | ReturnType<typeof changeNewText>
  | ReturnType<typeof sendMessageActionCreator>
  | ReturnType<typeof updateMessageActionCreator>

export type FilterType = "All Posts" | "Published Posts" | "Unpublished Posts"

export const store: StoreType = {
  _state: {
    profilePage: {
      title: "My posts",
      descForNewPost: "",
      posts: [
        {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
        {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
        {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
        {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
        {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
        {id: v1(), likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"}
      ],
    },
    dialogsPage: {
      dialogsTitle: "Dialogs",
      dialogs: [
        {id: v1(), userName: "Polina", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: v1(), userName: "Vadim", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: v1(), userName: "Igor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: v1(), userName: "Olga", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: v1(), userName: "Petr", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      ],
      messagesTitle: "Messages from ",
      messages: [
        {id: v1(), text: "Lorem ipsum dolor"},
        {id: v1(), text: "Lorem ipsum dolor"},
        {id: v1(), text: "Lorem ipsum dolor"},
        {id: v1(), text: "Lorem ipsum dolor"},
        {id: v1(), text: "Lorem ipsum dolor"}
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _rerenderEntireTree() {
    console.log("hello state was changed")
    console.log(store._state.profilePage.posts)
  },
  subscribe(callback)  {
    this._rerenderEntireTree = callback
  },
  getState() {
    return this._state
  },

  dispatch(action) {
    // this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._rerenderEntireTree()
  }
}

export default store