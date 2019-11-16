import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://thequietsite.co.uk/wp-content/uploads/2019/05/tqs_logo_WhtGreen-1.png" alt=""/>
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;