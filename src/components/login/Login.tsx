import {LoginFormType, LoginReduxForm} from "./LoginForm"
import classes from "../content/profile/posts/Posts.module.sass"
import s from './LoginForm.module.sass'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


const Login = (props: LoginContainerType) => {

  const onSubmit = (formData: LoginFormType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={`profile/${props.userId}`}/>
  }


  return (
    <div className={s.loginWrapper}>
      <div style={{lineHeight:'20px', fontSize: '12px', color: 'grey', textAlign: 'center'}}>
        <p>
          To log in get registered <a href={'https://social-network.samuraijs.com/'} target={'_blank'}> here </a>
          or use common test account credentials:
        </p>
        <p>
          Email: free@samuraijs.com, Password: free
        </p>
      </div>
      <h2 data-testid={"login"} className={classes.posts__header}>Login</h2>
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
  )
}

type mapStateToPropsType = {
  isAuth: boolean
  userId: number | null
  captchaUrl: string | null
}

type mapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginContainerType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps, {login})(Login)