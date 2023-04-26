import React from "react";
import {
  deleteMessageActionCreator,
  DialogPageType,
  editMessageActionCreator,
  sendMessageActionCreator
} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {UserType} from "../../../redux/users-reducer";
import {getUsersPage} from "../../../redux/users-selectors";


type MapStatePropsType = {
  dialogsPage: DialogPageType
  authenticatedUserId: number | null
}
type MapDispatchToProps = {
  onSendMessageClick: (newMessageBody: string, dialogId: string, userId: number | null) => void
  removeMessage: (messageId: string, dialogId: string) => void
  saveChangedMessage: (editedMessageBode: string, messageId: string, dialogId: string) => void
}

export type DialogsPagePropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

  return {
    dialogsPage: state.dialogsPage,
    authenticatedUserId: state.auth.userId
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    onSendMessageClick: (newMessageBody: string, dialogId: string, userId: number | null) => {
      dispatch(sendMessageActionCreator(newMessageBody, dialogId, userId))
    },
    removeMessage: (messageId: string, dialogId: string) => {
      dispatch(deleteMessageActionCreator(messageId, dialogId))
    },
    saveChangedMessage: (editedMessageBody: string, messageId: string, dialogId: string) => {
      dispatch(editMessageActionCreator(editedMessageBody, messageId, dialogId))
    }
  }
}


export default compose<React.ComponentType>(
  withAuthRedirect,
  connect<MapStatePropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)
)(Dialogs)