import React from "react";
import {Profile} from "./Profile";
import {ApiUserProfileType, getUserProfile, ProfilePageType} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
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
  getUserProfile: (userId: string) => void
}
export type OwnPropsType = MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfilePagePropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = "2"
    }
    console.log(userId)
    this.props.getUserProfile(userId)
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
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//   return {
//     getUserProfile: (userId: string) => {
//       dispatch(getUserProfile(userId))
//     }
//   }
// }

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent)