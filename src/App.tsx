import './App.sass';
import HeaderContainer from "./components/header/HeaderContainer"
import {Navbar} from "./components/navbar/Navbar"
import {Footer} from "./components/footer/Footer"
import {Route} from "react-router-dom"
import DialogsContainer from "./components/content/dialogs/DialogsContainer";
import UsersContainer from "./components/content/users/UsersContainer";
import WithUrlDataContainerComponent from "./components/content/profile/ProfileContainer";


const App = () => {

  return (
    <div className="container">
      <div className="wrapper">
        <HeaderContainer />
        <main className="main">
          <Navbar/>
          <div className='content'>
            <div className='content__imgWrapper'>
              <img className='content__img'
                   src="https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg"
                   alt="sea"/>
            </div>
            <div className='content__desc'>

              <Route path={"/"} exact component={WithUrlDataContainerComponent}/>

              <Route path="/profile/:userId" component={WithUrlDataContainerComponent}/>
              <Route path="/dialogs" component={DialogsContainer}/>
              <Route path="/users" component={UsersContainer}/>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
