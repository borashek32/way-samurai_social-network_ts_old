import s from './LoginForm.module.sass'
import classes from './../content/users/user/User.module.sass'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";


export type LoginFormType = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormType>> = (props) => {

  return (
    <form
      onSubmit={props.handleSubmit}
      action="#"
      className={s.loginForm}
    >
      <div className={s.loginInputGroup}>
        <label htmlFor="#">User Name</label>
        <Field
          component={"input"}
          name={"login"}
          placeholder={"Enter your login"}
          className={s.loginInput}
          type="text"
        />
      </div>
      <div className={s.loginInputGroup}>
        <label htmlFor="#">Password</label>
        <Field
          component={"input"}
          name={"password"}
          placeholder={"Enter your password"}
          className={s.loginInput}
          type="text"
        />
      </div>
      <div className={s.loginInputGroupRememberMe}>
        <label htmlFor="#">
          Remember Me
        </label>
        <Field
          component={"input"}
          name={"rememberMe"}
          className={s.loginRememberMe}
          type="checkbox"
        />
      </div>
      <button
        className={classes.button}
      >
        Login
      </button>
    </form>
  )
}

export const LoginReduxForm = reduxForm<LoginFormType>({
  form: 'login',
}) (LoginForm)