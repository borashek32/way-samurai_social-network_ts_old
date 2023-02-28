import s from "../Profile.module.sass";
import {ChangeEvent, useState} from "react";

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {

  const [status, setStatus] = useState('Enter your status')
  const [editMode, setEditMode] = useState(false)

  const onEditMode = () => {
    setEditMode(true)
    setStatus('')
  }
  const offEditMode = () => setEditMode(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
    props.updateStatus(status)
  }

  return (
    <div className={s.profile__statusWrapper}>
      <p className={s.profile__statusEnter}>My Status:</p>
      {!editMode && <h4
        className={s.profile__status}
        onDoubleClick={onEditMode}
      >
        {props.status}
      </h4>}
      {editMode && <input
        type="text"
        value={status}
        onBlur={offEditMode}
        onChange={onChange}
        className={s.profile__statusInput}
        autoFocus
      />}
    </div>
  )
}