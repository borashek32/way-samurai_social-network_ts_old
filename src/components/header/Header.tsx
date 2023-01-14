import classes from './Header.module.sass';
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.header__img}
           src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
           alt="logo"/>
      <ul className={classes.header__menu}>
        <li className={classes.nav__item}>
          <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;