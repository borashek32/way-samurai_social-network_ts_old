import './App.sass';
import HeaderContainer from "./components/header/HeaderContainer"
import {Footer} from "./components/footer/Footer"
import {Route, withRouter} from "react-router-dom"
import DialogsContainer from "./components/content/dialogs/DialogsContainer"
import UsersContainer from "./components/content/users/UsersContainer"
import ProfileContainer from "./components/content/profile/ProfileContainer"
import Login from "./components/login/Login"
import NavbarContainer from "./components/navbar/NavbarContainer"
import React, {FC} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp, InitialType} from "./redux/app-reducer";
import {Preloader} from "./components/utils/preloader/Preloader";
import {AppStateType} from "./redux/redux-store";


class App extends React.Component<any> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
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

                <Route path={"/"} exact component={ProfileContainer}/>

                <Route path="/profile/:userId" component={ProfileContainer}/>
                <Route path="/dialogs" component={DialogsContainer}/>
                <Route path="/users" component={UsersContainer}/>

                <Route path={"/login"} component={Login}/>
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
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

  return {
    initialized: state.app.initialized
  }
}


export default compose<FC>(
  withRouter,
  connect(mapStateToProps, {initializeApp}))
(App)
