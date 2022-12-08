import {v1} from "uuid"

let rerenderEntireTree = (state: RootStateType) => {
  console.log("hello")
}
// export const subscribe = (callback: () => void) => {
//   rerenderEntireTree = callback
// }

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
}
export type SidebarType = {}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: SidebarType
}
export type FilterType = "All Posts" | "Published Posts" | "Unpublished Posts"

let state: RootStateType = {
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
    ]
  },
  sidebar: {}
}

export const addPost = (desc: string) => {
  const newPost: PostType = {id: v1(), likes: 0, desc: desc}
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}
export const onChange = (newDesc: string) => {
  state.profilePage.descForNewPost = newDesc
  rerenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType) => void) => {
  rerenderEntireTree = observer
}

export default state