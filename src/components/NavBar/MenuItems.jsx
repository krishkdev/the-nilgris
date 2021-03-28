import React from "react";
import Styles from "./MenuItems.module.css";

const MenuItems = () => {
  return (
    <div className={Styles.menu}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">Destination</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </div>
  );
};

export default MenuItems;
