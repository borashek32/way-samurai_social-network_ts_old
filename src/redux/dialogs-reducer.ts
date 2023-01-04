import {DialogPageType, MessageType} from "./store";
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

const initialState = {
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
}

export const dialogsReducer = (state: DialogPageType = initialState, action: any) => {
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