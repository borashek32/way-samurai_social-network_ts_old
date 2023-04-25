import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersApi} from "../api/api";
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";


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
}
export type OneMessageType = {
  id: string
  text: string
  userId: number
}

const dialog1 = v1()
const dialog2 = v1()
const dialog3 = v1()

const initialState: DialogPageType = {
  dialogs: [
    {dialogId: dialog1, userId: 28821},
    {dialogId: dialog2, userId: 28806},
    {dialogId: dialog3, userId: 28791},
  ],
  messages: {
    [dialog1]: [
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 28821},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 27310},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 28821}
    ] as OneMessageType[],
    [dialog2]: [
      {id: v1(), text: "test Lorem ipsum dolor sit amet", userId: 28806},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 27310},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 28806}
    ] as OneMessageType[],
    [dialog3]: [
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 28791},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 27310},
      {id: v1(), text: "Lorem ipsum dolor sit amet", userId: 28791}
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
            { id: v1(), text: action.newMessageBody, userId: action.userId },
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

export const requestUsersForDialogs = () => {
  return async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    const response = await usersApi.getUsers(10, 100)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
  }
}