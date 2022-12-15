import {DialogPageType, MessageType} from "./state";
import {v1} from "uuid";

export type ActionsTypes = ReturnType<typeof sendMessageActionCreator> | ReturnType<typeof updateMessageActionCreator>

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

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
  if (action.type === "SEND_MESSAGE") {
    const newMessage: MessageType = {
      id: v1(),
      text: action.text
    }
    state.messages.push(newMessage)
    state.newMessageBody = ''

  } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
    state.newMessageBody = action.text
  }
  return state
}