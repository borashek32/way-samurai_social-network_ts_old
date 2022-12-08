import './App.sass';
import Header from "./components/header/Header"
import {Navbar} from "./components/navbar/Navbar"
import {Footer} from "./components/footer/Footer"
import {BrowserRouter, Route} from "react-router-dom"
import {Profile} from "./components/content/profile/Profile"
import {News} from "./components/content/news/News"
import state, {FilterType, PostType} from "./redux/state";
import {Dialogs} from "./components/content/dialogs/Dialogs";
import {v1} from "uuid";
import {useState} from "react";


function App() {
  // const [posts, setPosts] = useState<Array<PostType>>(state.profilePage.posts)
  // const [filter, setFilter] = useState<FilterType>("All Posts");
  // // filter posts
  // const filterClickHandler = (buttonName: FilterType) => {
  //   setFilter(buttonName);
  // }
  // let currentPosts = posts;
  // if (filter === "Published Posts") {
  //   currentPosts = currentPosts.filter((filteredPost) => filteredPost.isPublished);
  // }
  // if (filter === "Unpublished Posts") {
  //   currentPosts = currentPosts.filter((filteredPost) => !filteredPost.isPublished);
  // }
  // // add post
  // const addPost = (desc: string) => {
  //   let newPublication = {id: v1(), isPublished: false, likes: 0, desc: desc}
  //   setPosts([newPublication, ...posts])
  // }
  // // delete post
  // const deletePostHandler = (id: string) => {
  //   setPosts(currentPosts.filter(p => p.id !== id))
  // }
  // // publish post
  // const changeIsPublishedHandler = (id: string, newValue: boolean) => {
  //   setPosts(posts.map(p => p.id === id ? {...p, isPublished: newValue} : p))
  // }

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
                <Route path="/profile" component={Profile} />
                <Route
                  path="/dialogs" render={() =>
                  <Dialogs
                    dialogs={state.dialogsPage.dialogs}
                    dialogsTitle={state.dialogsPage.dialogsTitle}
                    messagesTitle={state.dialogsPage.messagesTitle}
                    messages={state.dialogsPage.messages}
                  />} />
                <Route path="/news" component={News} />
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
