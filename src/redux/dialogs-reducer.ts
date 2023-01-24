import {v1} from "uuid";

export type ActionsTypes = ReturnType<typeof sendMessageActionCreator> | ReturnType<typeof updateMessageActionCreator>

export type DialogPageType = {
  dialogsTitle: string
  dialogs: Array<DialogType>
  messagesTitle: string
  messages: Array<MessageType>
  newMessageBody: string
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
  ] as MessageType[],
  newMessageBody: ""
}

export const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SEND_MESSAGE": {
      const newMessage: MessageType = {
        id: v1(),
        text: state.newMessageBody
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: ""
      }
    }
    case "UPDATE_NEW_MESSAGE_BODY": {
      return {
        ...state,
        newMessageBody: action.text
      }
    }
    default: {
      return state
    }
  }
}

export const sendMessageActionCreator = () => {
  return {type: "SEND_MESSAGE"} as const
}
export const updateMessageActionCreator = (newText: string) => {
  return {type: "UPDATE_NEW_MESSAGE_BODY", text: newText} as const
}