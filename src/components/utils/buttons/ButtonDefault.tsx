import classes from './ButtonDefault.module.sass'

type ButtonDefaultType = {
  name: string
}

export const ButtonDefault = (props: ButtonDefaultType) => {

  return (
    <button
      className={classes.button}
    >
      {props.name}
    </button>
  )
}