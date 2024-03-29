import s from './LoginForm.module.sass';
import classes from './../content/users/user/User.module.sass';
import classesTA from "../utils/textarea/TextArea.module.sass";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../utils/input/Input";


export type LoginOwnType = {
  captchaUrl: string | null
}

export type LoginFormType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormType, LoginOwnType> & LoginOwnType> = ({error, handleSubmit, captchaUrl}) => {

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
      {captchaUrl && <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
        <img src={captchaUrl} alt={"captcha"} />
        <div style={{display: "flex", flexDirection: "column", marginBottom: "-20px"}}>
          <p style={{margin: "0 0 10px 20px"}}>Captcha:</p>
          <Field
            placeholder={"Enter symbols"}
            type={"text"}
            name={"captcha"}
            component={Input}
            error={error ? "Please enter valid Captcha" : ""}
          />
        </div>
      </div>}
      <button
        className={classes.button}
        style={{marginTop: '15px'}}
      >
        Login
      </button>
    </form>
  )
}


export const LoginReduxForm = reduxForm<LoginFormType, LoginOwnType>({
  form: 'login',
}) (LoginForm)