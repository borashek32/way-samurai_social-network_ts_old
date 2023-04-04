import s from './LoginForm.module.sass';
import classes from './../content/users/user/User.module.sass';
import classesTA from "../utils/textarea/TextArea.module.sass";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../utils/input/Input";


export type LoginFormType = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormType>> = ({error, handleSubmit}) => {

  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      className={s.loginForm}
    >
      {error === "Incorrect Email or Password"
        ? <span className={classesTA.erroredSpan}>Incorrect Email or Password</span>
        : ""
      }
      <div className={s.loginInputGroup}>
        <label className={s.loginInputLabel} htmlFor="#">User Email</label>
        <Field
          component={Input}
          name={"email"}
          placeholder={"Enter your email"}
          type={"text"}
          error={error === "Please enter your Email" || error === "Enter valid Email"
            ? error : ""}
        />
      </div>
      <div className={s.loginInputGroup}>
        <label data-testid={"password"} className={s.loginInputLabel} htmlFor={"password"}>Password</label>
        <Field
          component={Input}
          name={"password"}
          placeholder={"Enter your password"}
          type={"password"}
          error={error === "Enter your password" ? error : ""}
        />
      </div>
      <div className={s.loginInputGroupRememberMe}>
        <label htmlFor="#">
          Remember Me
        </label>
        <Field
          data-testid={"rememberMe"}
          component={"input"}
          name={"rememberMe"}
          className={s.loginRememberMe}
          type={"checkbox"}
        />
      </div>
      <button
        className={classes.button}
        style={{marginTop: '15px'}}
      >
        Login
      </button>
    </form>
  )
}


export const LoginReduxForm = reduxForm<LoginFormType>({
  form: 'login',
}) (LoginForm)