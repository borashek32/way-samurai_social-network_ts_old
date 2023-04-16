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
          <NavLink to={'/way-samurai_social-network_ts_old/profile/' + props.userId} activeClassName={classes.active}>Profile</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/way-samurai_social-network_ts_old/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/way-samurai_social-network_ts_old/users" activeClassName={classes.active}>Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}