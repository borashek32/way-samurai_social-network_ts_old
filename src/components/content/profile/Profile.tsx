import classes from "./Profile.module.sass";
import {Posts} from "./posts/Posts";
import {ProfilePageType} from "../../../redux/state";

type PropsType = {
  props: ProfilePageType
  addPost: (desc: string) => void
  onChangeCallback: (newDesc: string) => void
  descForNewPost: string
}

export const Profile = (props: PropsType) => {
  return (
    <div>
      <div className={classes.profile}>
        <div className={classes.profile__imgWrapper}>
          <img width="150px" className={classes.author__logo}
               src="https://gamerwall.pro/uploads/posts/2022-06/1655668285_2-gamerwall-pro-p-koti-na-more-priroda-krasivo-foto-3.jpg"
               alt="cat"/>
        </div>
        <div className={classes.profile__info}>
          <p className={classes.profile__item}>Nickname: </p>
          <p className={classes.profile__item}>First Name: </p>
          <p className={classes.profile__item}>Last Name: </p>
        </div>
      </div>
      <Posts
        title="My Posts"
        posts={props.props.posts}
        addPost={props.addPost}
        onChangeCallback={props.onChangeCallback}
        descForNewPost={props.descForNewPost}
      />
    </div>
  )
}