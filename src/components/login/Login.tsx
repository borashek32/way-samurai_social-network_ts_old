import {LoginFormType, LoginReduxForm} from "./LoginForm"
import classes from "../content/profile/posts/Posts.module.sass"
import s from './LoginForm.module.sass'

export const Login = () => {

  const onSubmit = (formData: LoginFormType) => {
    console.log(formData)
  }

  return (
    <div className={s.loginWrapper}>
      <h2 className={classes.posts__header}>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}