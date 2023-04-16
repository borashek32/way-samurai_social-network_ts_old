import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Preloader} from "../components/utils/preloader/Preloader";

type MapStateToPropsType = {
  isAuth: boolean
  initialized: boolean
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized
  }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStateToPropsType) => {

    let {isAuth, initialized, ...restProps} = props

    if (!isAuth) return <Redirect to={"/login"} />

    return <Component {...restProps as T} />
    // return <Component isAuth={props.isAuth} initialized={props.initialized} {...restProps as T} />
  }
  return connect(MapStateToProps)(RedirectComponent)
}