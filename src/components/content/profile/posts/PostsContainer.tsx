import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {
  addPostAC,
  editPostAC,
  loadPostData,
  ProfilePageType,
  removePostAC,
  setIsPublished
} from "../../../../redux/profile-reducer";


type MapStatePropsType = {
  profilePage: ProfilePageType
}
type MapDispatchToProps = {
  addPost: (descForNewPost: string) => void
  removePost: (postId: string) => void
  setIsPublished: (isPublished: boolean, postId: string) => void
  editPost: (desc: string, postId: string) => void
  loadPostDesc: (desc: string, postId: string) => void
}

export type PostsPagePropsType = MapStatePropsType & MapDispatchToProps & {isOwner: boolean}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (descForNewPost: string) => dispatch(addPostAC(descForNewPost)),
    removePost: (postId: string) => dispatch(removePostAC(postId)),
    setIsPublished: (isPublished: boolean, postId: string) => dispatch(setIsPublished(isPublished, postId)),
    editPost: (desc: string, postId: string) => dispatch(editPostAC(desc, postId)),
    loadPostDesc: (desc: string, postId: string) => dispatch(loadPostData(desc, postId))
  }
}

export default connect<MapStatePropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (Posts)