import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
const navbarItem = [
  { title: "Home" , to:"/"},
  { title: "Products" , to:"/products"},
  { title: "Brands" , to:"/brands"},
  { title: "Topsale", to:"/topsale" },
  { title: "Contact Us", to:"/contactus" },
];
const Navbar = () => {
  return (
      <div className={styles.navBar}>
        <ul>
          {navbarItem.map((navbarItem, index) => (
            <li key={index}>
              <NavLink  relative="path" to={navbarItem.to}>{navbarItem.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
  );
};
export default Navbar;
