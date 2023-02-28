import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<HeaderContainerType> {

  componentDidMount() {
    this.props.getAuthUserData()
    //this.props.setAuthUserData(this.props.userId, this.props.email, this.props.login)
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
    login: state.auth.login,
    userId: state.auth.userId,
    email: state.auth.email
  }
}
type mapStateToPropsType = {
  isAuth: boolean
  login: string | null
  userId: number | null
  email: string | null
}
type mapDispatchToPropsType = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
  getAuthUserData: () => void
}
type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, {getAuthUserData, setAuthUserData}) (HeaderContainer)