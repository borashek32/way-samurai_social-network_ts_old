import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<HeaderContainerType> {

  componentDidMount() {
    this.props.getAuthUserData()
    this.props.setAuthUserData()
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}
type mapStateToPropsType = {
  isAuth: boolean
  login: string | null
}
type mapDispatchToPropsType = {
  setAuthUserData: (userId: string | null, email: string, login: string) => void
  getAuthUserData: () => void
}
type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

// @ts-ignore
export default connect(mapStateToProps, {getAuthUserData, setAuthUserData}) (HeaderContainer)