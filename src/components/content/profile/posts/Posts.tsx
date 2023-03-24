// import classes from './Posts.module.sass'
// import React from "react";
// import {Post} from "./post/Post";
// import {PostsPagePropsType} from "./PostsContainer";
// import {AddPostFormType, AddPostReduxForm} from "./AddPostForm";
//
//
// class Posts extends React.PureComponent<PostsPagePropsType> {
//
//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     this.setState({a: 12})
//   //   }, 3000)
//   // }
//
//   // shouldComponentUpdate(nextProps: Readonly<PostsPagePropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
//   //   return nextProps !== this.props && nextState !== this.state
//   // }
//
//   render() {
//     ('posts')
//
//     const addPost = (formData: AddPostFormType) => {
//       this.props.addPost(formData.descForNewPost)
//     }
//
//     return (
//       <div className={classes.posts}>
//         <h2 className={classes.posts__header}>{this.props.profilePage.title}</h2>
//         <div className={classes.addPost}>
//           <AddPostReduxForm onSubmit={addPost}/>
//         </div>
//         {this.props.profilePage.posts.map((p) => {
//           return (
//             <Post
//               likes={p.likes}
//               id={p.id}
//               desc={p.desc}
//               key={p.id}
//             />
//           )
//         })}
//       </div>
//     )
//   }
// }
//
// export default Posts


import React from "react"
import classes from './Posts.module.sass'
import {Post} from "./post/Post";
import {PostsPagePropsType} from "./PostsContainer";
import {AddPostFormType, AddPostReduxForm} from "./AddPostForm";


const Posts = React.memo<PostsPagePropsType>((props) => {
  ('posts')
  const addPost = (formData: AddPostFormType) => {
    props.addPost(formData.descForNewPost)
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.posts__header}>{props.profilePage.title}</h2>
      <div className={classes.addPost}>
        <AddPostReduxForm onSubmit={addPost}/>
      </div>
      {props.profilePage.posts.map((p) => {
        return (
          <Post
            likes={p.likes}
            id={p.id}
            desc={p.desc}
            key={p.id}
          />
        )
      })}
    </div>
  );
})

export default Posts