import React, {ChangeEvent} from "react";
import {DialogPageType, sendMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
  dialogsPage: DialogPageType
}
type MapDispatchToProps = {
  onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onSendMessageClick: () => void
}

export type DialogsPagePropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updateMessageActionCreator(e.currentTarget.value))
    },
    onSendMessageClick: () => {
      dispatch(sendMessageActionCreator())
    }
  }
}

export default connect<MapStatePropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (Dialogs)
