import classes from './Header.module.sass';
import {NavLink} from "react-router-dom";

type HeaderType = {
  isAuth: boolean | undefined
  login: string | null
  logout: () => void
}

function Header(props: HeaderType) {

  return (
    <header className={classes.header}>
      <NavLink to="/">
        <img className={classes.header__img}
             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
             alt="logo"/>
      </NavLink>
      <ul className={classes.header__menu}>
        <li className={classes.nav__item}>
          <NavLink to="/profile/:userId" activeClassName={classes.active}>Profile</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
        </li>
        <li className={classes.nav__item}>
          {props.isAuth
              ? <p>{props.login} <button onClick={props.logout}>Log out</button></p>
              : <NavLink to="/login" activeClassName={classes.active}>Login</NavLink>
          }
        </li>
      </ul>
    </header>
  );
}

export default Header;