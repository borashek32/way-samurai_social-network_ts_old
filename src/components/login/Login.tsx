import {LoginFormType, LoginReduxForm} from "./LoginForm"
import classes from "../content/profile/posts/Posts.module.sass"
import s from './LoginForm.module.sass'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


const Login = (props: LoginContainerType) => {

  const onSubmit = (formData: LoginFormType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={`profile/${props.userId}`}/>
  }
  (props.isAuth, "ISAUTH")

  return (
    <div className={s.loginWrapper}>
      <h2 className={classes.posts__header}>Login</h2>
      <p>
        To log in get registered <a href={'https://social-network.samuraijs.com/'} target={'_blank'}>here</a>
      </p>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

type mapStateToPropsType = {
  isAuth: boolean
  userId: number | null
}

type mapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginContainerType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  }
}



export default connect(mapStateToProps, {login})(Login)