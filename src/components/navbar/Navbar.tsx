import classes from './Navbar.module.sass';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getStatus, getUserProfile} from "./../../redux/profile-reducer";


type NavbarType = {
  userId: number | null
}

export const Navbar = (props: NavbarType) => {
  const dispatch = useDispatch()

  const getUserId = () => {
    dispatch(getUserProfile(props.userId))
    dispatch(getStatus(props.userId))
  }

  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <NavLink
            to={'/profile/' + props.userId}
            onClick={getUserId}
            activeClassName={classes.active}
          >
            Profile
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/dialogs"
            activeClassName={classes.active}
          >
            Dialogs
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/users"
            activeClassName={classes.active}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}