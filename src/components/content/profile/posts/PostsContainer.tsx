import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {
  addPostAC,
  savePostAC,
  ProfilePageType,
  removePostAC,
  setIsPublished, PostType
} from "../../../../redux/profile-reducer";


type MapStatePropsType = {
  profilePage: ProfilePageType
}
type MapDispatchToProps = {
  addPost: (descForNewPost: string) => void
  removePost: (postId: string) => void
  setIsPublished: (isPublished: boolean, postId: string) => void
  savePost: (post: PostType) => void
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
    savePost: (post: PostType) => dispatch(savePostAC(post))
  }
}

export default connect<MapStatePropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (Posts)