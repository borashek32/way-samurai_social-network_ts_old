import classes from './Navbar.module.sass';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li className={classes.nav__item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </li>
            </ul>
        </nav>
    );
}