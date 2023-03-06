import React, {ChangeEvent} from "react";
import {DialogPageType, sendMessageActionCreator} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {AddMessageFormType} from "./AddMessageForm";


type MapStatePropsType = {
  dialogsPage: DialogPageType
}
type MapDispatchToProps = {
  onSendMessageClick: (newMessageBody: string) => void
}

export type DialogsPagePropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    onSendMessageClick: (newMessageBody: string) => {
      dispatch(sendMessageActionCreator(newMessageBody))
    }
  }
}

// export default withAuthRedirect(connect<MapStatePropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (Dialogs))

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect<MapStatePropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)
)(Dialogs)