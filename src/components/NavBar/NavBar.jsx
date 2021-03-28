import React from "react";
import Styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <header>
      <h2 className={Styles.logo}>Thenilgris</h2>
      <div className={Styles.toggle}></div>
    </header>
  );
};

export default NavBar;
