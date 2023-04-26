import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersApi} from "../api/api";
import {setUsers} from "./users-reducer";


const SEND_MESSAGE = "dialogs/SEND_MESSAGE"
const SAVE_MESSAGE = "dialogs/SAVE_MESSAGE"
const DELETE_MESSAGE = "dialogs/DELETE_MESSAGE"

export type ActionsTypes =
  ReturnType<typeof sendMessageActionCreator>
  | ReturnType<typeof editMessageActionCreator>
  | ReturnType<typeof deleteMessageActionCreator>

export type DialogPageType = {
  dialogs: DialogType[]
  messages: MessageType
}
export type MessageType = {
  [key: string]: OneMessageType[]
}
export type DialogType = {
  dialogId: string
  userId: number
  photo: string
  name: string
}
export type OneMessageType = {
  id: string
  text: string
  userId: number
  name: string
}

const dialog1 = v1()
const dialog2 = v1()
const dialog3 = v1()

const initialState: DialogPageType = {
  dialogs: [
    {dialogId: dialog1, userId: 300000000, name: "Polina", photo: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"},
    {dialogId: dialog2, userId: 400000000, name: "Igor", photo: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"},
    {dialogId: dialog3, userId: 800000000, name: "Vadim", photo: "https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o="}
  ],
  messages: {
    [dialog1]: [
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 300000000, name: "Polina"},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 27310, name: "Me"},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 300000000, name: "Polina"}
    ] as OneMessageType[],
    [dialog2]: [
      {id: v1(), text: "test Lorem ipsum dolor sit amet", userId: 400000000, name: "Igor"},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 27310, name: "Me"},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 400000000, name: "Igor"}
    ] as OneMessageType[],
    [dialog3]: [
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 800000000, name: "Vadim"},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 27310, name: "Me"},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 800000000, name: "Vadim"}
    ] as OneMessageType[]
  } as MessageType
}

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.dialogId]: [
            ...state.messages[action.dialogId],
            { id: v1(), text: action.newMessageBody, userId: action.userId, name: "Me" },
          ],
        },
      }
    }
    case SAVE_MESSAGE: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.dialogId]: [
            ...state.messages[action.dialogId].map(m => m.id === action.messageId
              ? {...m, text: action.text}
              : m)
          ]
        }
      }
    }
    case DELETE_MESSAGE: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.dialogId]: state.messages[action.dialogId].filter(message => message.id !== action.messageId)
        }
      }
    }
    default: {
      return state
    }
  }
}

export const sendMessageActionCreator = (newMessageBody: string, dialogId: string, userId: number | null) => {
  return {type: SEND_MESSAGE, newMessageBody, dialogId, userId} as const
}
export const editMessageActionCreator = (text: string, messageId: string, dialogId: string) => {
  return {type: SAVE_MESSAGE, text, messageId, dialogId} as const
}
export const deleteMessageActionCreator = (messageId: string, dialogId: string) => {
  return {type: DELETE_MESSAGE, messageId, dialogId} as const
}
// thunk to get all users
export const requestAllUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await usersApi.getUsersForDialogs()
    dispatch(setUsers(response.items))
  }
}