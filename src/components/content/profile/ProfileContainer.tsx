import React from "react";
import {Profile} from "./Profile";
import {ApiUserProfileType, getStatus, getUserProfile, ProfilePageType, savePhoto, saveProfileData, updateStatus} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfilePagePropsType = RouteComponentProps<any> & OwnPropsType

type MapStatePropsType = {
  userId: number | null
  profile: ApiUserProfileType
  profilePage: ProfilePageType
  status: string
  isAuth: boolean
  isOwner: boolean
}
type MapDispatchPropsType = {
  getUserProfile: (userId: number | null) => void
  getStatus: (userId: number | null) => void
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
  saveProfileData: (formData: ApiUserProfileType) => Promise<any>
}
export type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePagePropsType> {

  currentId: number | null = 0;

  requestDataProfile() {
    let userId = this.props.match.params.userId

    if (userId !== this.currentId) {
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
      this.currentId = userId
    }
  }

  componentDidMount() {
    this.requestDataProfile();
  }

  componentDidUpdate(prevProps: Readonly<ProfilePagePropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (+this.props.match.params.userId !== this.props.userId) {
      this.requestDataProfile()
    }
  }

  render() {

    return (
      <Profile
        saveProfileData={this.props.saveProfileData}
        savePhoto={this.props.savePhoto}
        profile={this.props.profile}
        profilePage={this.props.profilePage}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        isAuth={this.props.isAuth}
        isOwner={+this.props.match.params.userId === this.props.userId}
      />
    )
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    userId: state.auth.userId,
    profile: state.profilePage.profile,
    profilePage: state.profilePage,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    isOwner: state.auth.isOwner
  }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfileData
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)