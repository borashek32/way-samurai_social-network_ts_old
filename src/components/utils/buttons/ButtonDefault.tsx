import classes from './ButtonDefault.module.sass'

type ButtonDefaultType = {
  name: string
  callback?: () => void
}

export const ButtonDefault = (props: ButtonDefaultType) => {

  return (
    <button
      className={classes.button}
      onClick={props.callback}
    >
      {props.name}
    </button>
  )
}