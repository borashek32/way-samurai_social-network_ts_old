import classes from './Navbar.module.sass';
import {NavLink} from "react-router-dom";

type NavbarType = {
  userId: number | null
}

export const Navbar = (props: NavbarType) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <NavLink to={'profile/' + props.userId} activeClassName={classes.active}>Profile</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="users" activeClassName={classes.active}>Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}