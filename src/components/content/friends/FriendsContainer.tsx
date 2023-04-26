import React from "react";
import {AppStateType} from "../../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {Friends} from "./Friends";


type MapStatePropsType = {

}
type MapDispatchPropsType = {

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {

  }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {}),
  withAuthRedirect
)(Friends)