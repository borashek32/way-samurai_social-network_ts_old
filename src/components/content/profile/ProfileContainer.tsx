import React from "react";
import {Profile} from "./Profile";
import {
  ApiUserProfileType,
  getStatus,
  getUserProfile,
  ProfilePageType,
  updateStatus
} from "../../../redux/profile-reducer";
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
  userId: number | null
  profile: ApiUserProfileType
  profilePage: ProfilePageType
  status: string
}
type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
}
export type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePagePropsType> {

  currentId = '0';

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
    this.requestDataProfile()
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        profilePage={this.props.profilePage}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {

  return {
    userId: state.auth.userId,
    profile: state.profilePage.profile,
    profilePage: state.profilePage,
    status: state.profilePage.status
  }
}

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent))

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)