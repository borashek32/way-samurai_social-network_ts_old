import './App.sass';
import Header from "./components/header/Header"
import {Navbar} from "./components/navbar/Navbar"
import {Footer} from "./components/footer/Footer"
import {BrowserRouter, Route} from "react-router-dom"
import {Profile} from "./components/content/profile/Profile"
import {News} from "./components/content/news/News"
import {RootStateType} from "./redux/state";
import {Dialogs} from "./components/content/dialogs/Dialogs";

type AppPropsType ={
  state: RootStateType
  addPost: (desc: string) => void
  onChange: (newDesc: string) => void
}

function App(props: AppPropsType) {

  return (
    <BrowserRouter>
      <div className="container">
        <div className="wrapper">
          <Header />
          <main className="main">
            <Navbar />
            <div className='content'>
              <div className='content__imgWrapper'>
                <img className='content__img' src="https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg" alt="sea" />
              </div>
              <div className='content__desc'>
                <Route
                  path="/profile"
                  render={() => <Profile
                    // posts={props.state.profilePage.posts}
                    props={props.state.profilePage}
                    addPost={props.addPost}
                    onChangeCallback={props.onChange}
                    descForNewPost={props.state.profilePage.descForNewPost}
                  />}
                  // тоже самое в одну строчку
                  // component={()=><Profile posts={props.state.profilePage.posts} title={props.state.profilePage.title}/>}
                />
                <Route
                  path="/dialogs"
                  render={() => <Dialogs
                    // state={props.state.dialogsPage}
                    dialogs={props.state.dialogsPage.dialogs}
                    dialogsTitle={props.state.dialogsPage.dialogsTitle}
                    messagesTitle={props.state.dialogsPage.messagesTitle}
                    messages={props.state.dialogsPage.messages}
                  />}
                />
                <Route
                  path="/news"
                  component={News}
                />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
