import classes from './ButtonDefault.module.sass'
import styled from "styled-components";

type ButtonDefaultType = {
  name: string
  callback: () => void
}

export const ButtonDefault = (props: ButtonDefaultType) => {
  const onClickButtonHandler = () => {
    props.callback();
  }
  // const Button = styled.button`
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   color: ${props => props.inputColor || "palevioletred"};
  //   background-color: rgba(200, 52, 59, 0.756);
  //   border: 1px solid rgba(200, 52, 59, 0.756);
  //   border-radius: 4px;
  //   padding: 5px 25px;
  //   cursor: pointer;
  //   &:hover {
  //     background-color: rgb(207, 26, 35);
  //     border: 1px solid rgb(207, 26, 35);
  //   }
  // `;

  return (
    <button
      onClick={onClickButtonHandler}
      className={classes.button}
    >
      {props.name}
    </button>
  )
}