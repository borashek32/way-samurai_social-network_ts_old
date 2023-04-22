import classes from './Author.module.sass'
import React from "react";


type PostAuthorType = {
  authorPhoto: string
  userName: string
}

const PostAuthor: React.FC<PostAuthorType> = ({authorPhoto, userName}) => {
    return (
        <div className={classes.author}>
            <img
              className={classes.author__logo}
              src={authorPhoto ? authorPhoto : "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634__340.png"}
              alt="cat"
            />
            <p className={classes.author__name}>{userName}</p>
        </div>
    )
}

export default PostAuthor