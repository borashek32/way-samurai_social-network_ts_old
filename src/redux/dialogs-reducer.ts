import {v1} from "uuid";


const SEND_MESSAGE = "SEND_MESSAGE"

export type ActionsTypes = ReturnType<typeof sendMessageActionCreator>

export type DialogPageType = {
  dialogsTitle: string
  dialogs: Array<DialogType>
  messagesTitle: string
  messages: Array<MessageType>
}
export type MessageType = {
  id: string
  text: string
}
export type DialogType = {
  id: string
  userName: string
  text: string
}

const initialState: DialogPageType = {
  dialogsTitle: "Dialogs",
  dialogs: [
    {id: v1(), userName: "Polina", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {id: v1(), userName: "Vadim", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {id: v1(), userName: "Igor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {id: v1(), userName: "Olga", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {id: v1(), userName: "Petr", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
  ] as DialogType[],
  messagesTitle: "Messages from ",
  messages: [
    {id: v1(), text: "Lorem ipsum dolor"},
    {id: v1(), text: "Lorem ipsum dolor"},
    {id: v1(), text: "Lorem ipsum dolor"}
  ] as MessageType[]
}

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      debugger
      return {
        ...state,
        messages: [...state.messages, {id: v1(), text: action.newMessageBody}]
      }
    }
    default: {
      return state
    }
  }
}

export const sendMessageActionCreator = (newMessageBody: string) => {
  return {type: SEND_MESSAGE, newMessageBody} as const
}