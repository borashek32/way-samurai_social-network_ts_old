import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
  isAuth: boolean | undefined
  initialized: boolean
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized
  }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStateToPropsType) => {

    let {isAuth, initialized, ...restProps} = props
    console.log(isAuth)
    if (isAuth === undefined) return null
    if (!isAuth) return <Redirect to={"/login"}/>

    return <Component {...restProps as T} />
  }
  return connect(MapStateToProps)(RedirectComponent)
}