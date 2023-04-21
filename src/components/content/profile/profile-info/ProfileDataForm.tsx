import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {ApiUserProfileType} from "../../../../redux/profile-reducer";
import s from "../posts/Posts.module.sass";
import classes from "../Profile.module.sass";


type ProfileFormProps = {
  onSubmit: (formData: ApiUserProfileType) => void
};

type ProfileFormData = ApiUserProfileType;

const ProfileForm: React.FC<InjectedFormProps<ProfileFormData, ProfileFormProps> & ProfileFormProps> = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={classes.profile__info}>
      {props.error && <strong style={{color: "red", marginBottom: "10px"}}>{props.error}</strong>}
      <div className={classes.profile__item}>
        <label className={classes.profile__status} style={{whiteSpace: "nowrap"}} htmlFor="fullName">
          Full Name:
        </label>
        <Field
          className={classes.profile__input}
          name="fullName"
          component={'input'}
        />
      </div>
      <div className={classes.profile__item}>
        <label className={classes.profile__status} style={{whiteSpace: "nowrap"}} htmlFor="aboutMe">
          About Me:
        </label>
        <Field
          className={classes.profile__input}
          name="aboutMe"
          component="input"
        />
      </div>
      <div className={classes.profile__item}>
        <label className={classes.profile__status} style={{whiteSpace: "nowrap"}} htmlFor="lookingForAJob">
          Looking for a job:
        </label>
        <Field
          style={{display: "flex", justifyContent: "start"}}
          name="lookingForAJob"
          component="input"
          type="checkbox"
        />
      </div>
      <div className={classes.profile__item}>
        <label className={classes.profile__status} style={{whiteSpace: "nowrap"}} htmlFor="lookingForAJobDescription">
          Skills:
        </label>
        <Field
          className={classes.profile__input}
          name="lookingForAJobDescription"
          component="input"
        />
      </div>
      <div>
        <div className={classes.profile__item}>
          <label className={classes.profile__status} style={{whiteSpace: "nowrap"}} htmlFor="instagram">
            Instagram:
          </label>
          <Field
            className={classes.profile__input}
            name="contacts.instagram"
            component={"input"}
          />
        </div>
      </div>
      <div className={classes.profile__item}>
        <label className={classes.profile__status} style={{whiteSpace: "nowrap"}} htmlFor="facebook">
          Facebook:
        </label>
        <Field
          className={classes.profile__input}
          name="contacts.facebook"
          component="input"
        />
      </div>
      <div className={classes.profile__item}>
        <label className={classes.profile__status} style={{whiteSpace: "nowrap"}} htmlFor="github">
          GitHub:
        </label>
        <Field
          className={classes.profile__input}
          name="contacts.github"
          component="input"
        />
      </div>
      <button className={s.post__button} type="submit">Save</button>
    </form>
  );
};

export const ReduxProfileForm = reduxForm<ProfileFormData, ProfileFormProps>({
  form: 'profile',
})(ProfileForm);
