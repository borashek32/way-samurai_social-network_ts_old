import {v1} from "uuid"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type MessageType = {
  id: string
  text: string
}
export type DialogType = {
  id: string
  userName: string
  text: string
}
export type PostType = {
  id: string
  likes: number
  desc: string
}
export type ProfilePageType = {
  title: string
  descForNewPost: string
  posts: Array<PostType>
}
export type DialogPageType = {
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
export type ActionsTypes = ReturnType<typeof addPostActionCreator> 
  | ReturnType<typeof changeNewTextActionCreator>
  | ReturnType<typeof sendMessageActionCreator>
  | ReturnType<typeof updateMessageActionCreator>

export type FilterType = "All Posts" | "Published Posts" | "Unpublished Posts"

// ACTION CREATORS
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
export const sendMessageActionCreator = (text: string) => {
  return {
    type: "SEND_MESSAGE",
    text: text
  } as const
}
export const updateMessageActionCreator = (newText: string) => {
  return {
    type: "UPDATE_NEW_MESSAGE_BODY",
    text: newText
  } as const
}

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
  },
  subscribe(callback)  {
    this._rerenderEntireTree = callback
  },
  getState() {
    return this._state
  },

  dispatch(action) {
    // this._state.profilePage = profileReducer(this._state.profilePage, action)
    // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    // this._rerenderEntireTree()


    if (action.type === "ADD_POST") {
      const newPost: PostType = {
        id: v1(),
        likes: 0,
        desc: action.desc
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.descForNewPost = ""
      this._rerenderEntireTree()

    } else if (action.type === "CHANGE_NEW_TEXT") {
      this._state.profilePage.descForNewPost = action.newDesc
      this._rerenderEntireTree()

    } else if (action.type === "SEND_MESSAGE") {
      const newMessage: MessageType = {
        id: v1(),
        text: action.text
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageBody = ''
      this._rerenderEntireTree()

    } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
      this._state.dialogsPage.newMessageBody = action.text
      this._rerenderEntireTree()
    }
  }
}

export default store