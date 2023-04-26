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
  authenticatedUserId: number | null
}
type MapDispatchToProps = {
  addPost: (formData: {descForNewPost: string}, authenticatedUserId: number | null) => void
  removePost: (postId: string) => void
  setIsPublished: (isPublished: boolean, postId: string) => void
  savePost: (post: PostType) => void
}

export type PostsPagePropsType = MapStatePropsType & MapDispatchToProps & {isOwner: boolean}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage,
    authenticatedUserId: state.auth.userId
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (formData: {descForNewPost: string}, authenticatedUserId: number | null) => dispatch(addPostAC(formData, authenticatedUserId)),
    removePost: (postId: string) => dispatch(removePostAC(postId)),
    setIsPublished: (isPublished: boolean, postId: string) => dispatch(setIsPublished(isPublished, postId)),
    savePost: (post: PostType) => dispatch(savePostAC(post))
  }
}

export default connect<MapStatePropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (Posts)