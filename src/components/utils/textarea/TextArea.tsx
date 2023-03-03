import React, {HTMLInputTypeAttribute} from "react";
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";


export type TextAreaType = {
  input: WrappedFieldInputProps
  meta: WrappedFieldMetaProps
  placeholder?: string
  type?: HTMLInputTypeAttribute
  autoFocus?: boolean
}

export const TextArea: React.FC<TextAreaType> = ({input, meta:{touched, error}, placeholder}) => {
  return (
    <div>
      <textarea {...input} placeholder={placeholder}></textarea>
      {touched && error && <span>{error}</span>}
    </div>
  )
}