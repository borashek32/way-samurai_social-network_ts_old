import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, ProfilePageType} from "../../../../redux/profile-reducer";

type MapStatePropsType = {
  profilePage: ProfilePageType
}
type MapDispatchToProps = {
  addPost: (descForNewPost: string) => void
}

export type PostsPagePropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (descForNewPost: string) => {
      dispatch(addPostAC(descForNewPost))
    }
  }
}

export default connect<MapStatePropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (Posts)