import React from "react";
import {Profile} from "./Profile";
import {ApiUserProfileType, getUserProfile, ProfilePageType} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

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

class ProfileContainer extends React.Component<ProfilePagePropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = "2"
    }
    console.log(this.props)
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

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent))

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)