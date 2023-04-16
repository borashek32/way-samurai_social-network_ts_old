import React, {FC} from "react";
import './App.sass';
import HeaderContainer from "./components/header/HeaderContainer"
import DialogsContainer from "./components/content/dialogs/DialogsContainer"
import UsersContainer from "./components/content/users/UsersContainer"
import ProfileContainer from "./components/content/profile/ProfileContainer"
import Login from "./components/login/Login"
import NavbarContainer from "./components/navbar/NavbarContainer"
import {connect} from "react-redux";
import {Footer} from "./components/footer/Footer"
import {Route, withRouter} from "react-router-dom"
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/utils/preloader/Preloader";
import {AppStateType} from "./redux/redux-store";


class App extends React.Component<any> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized && !this.props.isAuth) {
      return <Preloader />
    }

    return (
      <div className="container">
        <div className="wrapper">
          <HeaderContainer/>
          <main className="main">
            <NavbarContainer/>
            <div className='content'>
              <div className='content__imgWrapper'>
                <img className='content__img'
                     src="https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg"
                     alt="sea"/>
              </div>
              <div className='content__desc'>
                <Route path="/" exact component={ProfileContainer}/>
                <Route path="/profile/:userId" exact component={ProfileContainer}/>
                <Route path="/dialogs" exact component={DialogsContainer}/>
                <Route path="/users" exact component={UsersContainer}/>
                <Route path="/login" exact component={Login}/>
              </div>
            </div>
          </main>
          <Footer/>
        </div>
      </div>
    )
  }
}

type mapStateToPropsType = {
  initialized: boolean
  isAuth: boolean | undefined
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth
})


export default compose<FC>(
  withRouter,
  connect(mapStateToProps, {initializeApp}))
(App)
