import React, {ChangeEvent} from "react";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPost, changeNewText, ProfilePageType} from "../../../../redux/profile-reducer";

type MapStatePropsType = {
  profilePage: ProfilePageType
}
type MapDispatchToProps = {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  addPost: () => void
}

export type PostsPagePropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(changeNewText(e.currentTarget.value))
    },
    addPost: () => {
      dispatch(addPost())
    }
  }
}

export default connect<MapStatePropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (Posts)