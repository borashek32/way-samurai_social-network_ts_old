import {v1} from "uuid"

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
export type StoreType = {
  _state: RootStateType
  onChange: (newDesc: string) => void
  addPost: (desc: string) => void
  _rerenderEntireTree: () => void
  subscribe: (callback: () => void) => void
  getState: () => RootStateType
}
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
      ]
    },
    sidebar: {}
  },
  addPost(desc: string) {
    const newPost: PostType = {id: v1(), likes: 0, desc: desc}
    this._state.profilePage.posts.push(newPost)
    this._rerenderEntireTree()
  },
  onChange(newDesc: string) {
    this._state.profilePage.descForNewPost = newDesc
    this._rerenderEntireTree()
  },
  _rerenderEntireTree() {
    console.log("hello state was changed")
  },
  subscribe(callback)  {
    this._rerenderEntireTree = callback
  },
  getState() {
    return this._state
  }
}

export default store