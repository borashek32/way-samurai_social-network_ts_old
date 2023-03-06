import React, {HTMLInputTypeAttribute} from "react";
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import classes from "../../utils/textarea/TextArea.module.sass";


export type InputType = {
  input: WrappedFieldInputProps
  meta: WrappedFieldMetaProps
  placeholder?: string
  type?: HTMLInputTypeAttribute
  autoFocus?: boolean
  error: string
}

export const Input: React.FC<InputType> = ({
                                            input,
                                            meta: {touched},
                                            placeholder,
  error
}) => {

  const cl = classes.addPost__textarea + ' ' + (error ? classes.erroredTextarea : '')

  return (
    <div className={classes.dialogsAddMessageFormWrapper}>
      <input
        {...input}
        placeholder={placeholder}
        className={cl}
      />
      {touched && error && <span className={classes.erroredSpan}>{error}</span>}
    </div>
  )
}