import {Navbar} from "./Navbar";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


class NavbarContainer extends React.Component<NavbarContainerType> {

  render() {
    return (
      <Navbar userId={this.props.userId}/>
    )
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    userId: state.auth.userId
  }
}
type mapStateToPropsType = {
  userId: number | null
}
type NavbarContainerType = mapStateToPropsType

export default connect(mapStateToProps) (NavbarContainer)