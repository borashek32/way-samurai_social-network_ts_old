import { v1 } from "uuid"
import {useState} from "react";

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
    isPublished: boolean
    likes: number
    desc: string
}
export type ProfilePageType = {
    title: string
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
        posts: [
            {id: v1(), isPublished: false, likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: v1(), isPublished: false, likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: v1(), isPublished: true, likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: v1(), isPublished: false, likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: v1(), isPublished: false, likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: v1(), isPublished: true, likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"}
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

// const [posts, setPosts] = useState<Array<PostType>>(state.profilePage.posts)
// const [filter, setFilter] = useState<FilterType>("All Posts");

// // filter posts
// export const filterClickHandler = (buttonName: FilterType) => {
//     setFilter(buttonName);
// }
// export let currentPosts = posts;
// if (filter === "Published Posts") {
//     currentPosts = currentPosts.filter((filteredPost) => filteredPost.isPublished);
// }
// if (filter === "Unpublished Posts") {
//     currentPosts = currentPosts.filter((filteredPost) => !filteredPost.isPublished);
// }
// // add post
// export const addPost = (desc: string) => {
//     let newPublication = {id: v1(), isPublished: false, likes: 0, desc: desc}
//     setPosts([newPublication, ...posts])
// }
// // delete post
// export const deletePostHandler = (id: string) => {
//     setPosts(currentPosts.filter(p => p.id !== id))
// }
// // publish post
// export const changeIsPublishedHandler = (id: string, newValue: boolean) => {
//     setPosts(posts.map(p => p.id === id ? {...p, isPublished: newValue} : p))
// }

export default state