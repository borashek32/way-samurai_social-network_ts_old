import React, {HTMLInputTypeAttribute} from "react";
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import classes from "../../utils/textarea/TextArea.module.sass";


export type TextAreaType = {
  input: WrappedFieldInputProps
  meta: WrappedFieldMetaProps
  placeholder?: string
  type?: HTMLInputTypeAttribute
  autoFocus?: boolean
}

export const TextArea: React.FC<TextAreaType> = ({
                                                   input,
                                                   meta:{touched, error},
                                                   placeholder
}) => {

  const cl = classes.addPost__textarea + ' ' + (error ? classes.erroredTextarea : '')

  return (
    <div className={classes.dialogsAddMessageFormWrapper}>
      <textarea
        {...input}
        placeholder={placeholder}
        className={cl}
      ></textarea>
      {touched && error && <span className={classes.erroredSpan}>{error}</span>}
    </div>
  )
}