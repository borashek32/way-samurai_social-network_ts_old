import './App.sass';
import Header from "./components/header/Header"
import {Navbar} from "./components/navbar/Navbar"
import {Footer} from "./components/footer/Footer"
import {Route} from "react-router-dom"
import {Profile} from "./components/content/profile/Profile"
import {News} from "./components/content/news/News"
import DialogsContainer from "./components/content/dialogs/DialogsContainer";
import UsersContainer from "./components/content/users/UsersContainer";
import WithUrlDataContainerComponent, {ProfileContainer} from "./components/content/profile/ProfileContainer";


const App = () => {

  return (
    <div className="container">
      <div className="wrapper">
        <Header/>
        <main className="main">
          <Navbar/>
          <div className='content'>
            <div className='content__imgWrapper'>
              <img className='content__img'
                   src="https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg"
                   alt="sea"/>
            </div>
            <div className='content__desc'>

              <Route path={"/"} exact component={Profile}/>

              <Route path="/news" component={News}/>
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
