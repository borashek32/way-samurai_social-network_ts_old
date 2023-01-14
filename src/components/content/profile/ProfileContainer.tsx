import React from "react";
import {Profile} from "./Profile";
import {ApiUserProfileType, ProfilePageType, setUserProfile} from "../../../redux/profile-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
  userId: string
}
type ProfilePagePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType = {
  profile: ApiUserProfileType
  profilePage: ProfilePageType
}
type MapDispatchPropsType = {
  setUserProfile: (profile: ApiUserProfileType) => void
}
export type OwnPropsType = MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfilePagePropsType> {

  componentDidMount() {
    const userId = this.props.match.params.userId
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        profilePage={this.props.profilePage}
      />
    )
  }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    profilePage: state.profilePage
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    setUserProfile: (profile: ApiUserProfileType) => {
      dispatch(setUserProfile(profile))
    },
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent)