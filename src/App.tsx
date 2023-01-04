import './App.sass';
import Header from "./components/header/Header"
import {Navbar} from "./components/navbar/Navbar"
import {Footer} from "./components/footer/Footer"
import {BrowserRouter, Route} from "react-router-dom"
import {Profile} from "./components/content/profile/Profile"
import {News} from "./components/content/news/News"
import {StoreType} from "./redux/store";
import {Dialogs} from "./components/content/dialogs/Dialogs";
import {ReduxStoreType} from "./redux/redux-store";

type PropsType ={
  store: ReduxStoreType
}

const App: React.FC<PropsType> = (props) => {
  const state = props.store.getState()

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
                    props={state.profilePage}
                    descForNewPost={state.profilePage.descForNewPost}
                    dispatch={props.store.dispatch.bind(props.store)}
                  />}
                />
                <Route
                  path="/dialogs"
                  render={() => <Dialogs
                    dialogsTitle={state.dialogsPage.dialogsTitle}
                    messagesTitle={state.dialogsPage.messagesTitle}
                    messages={state.dialogsPage.messages}
                    dialogs={state.dialogsPage.dialogs}
                    title={state.dialogsPage.dialogsTitle}
                    newMessageBody={state.dialogsPage.newMessageBody}
                    dispatch={props.store.dispatch.bind(props.store)}
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
