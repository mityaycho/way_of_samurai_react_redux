import React from "react";
import style from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink className={style.item + ' ' + style.active} activeClassName={style.activeLink} to="/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/news">News</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;