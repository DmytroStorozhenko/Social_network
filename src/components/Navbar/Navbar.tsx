import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={"/profile"} activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs"} activeClassName={classes.activeLink}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/users"} activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/settings"} activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
