import React from 'react';
import classes from "./Nav.module.css";
import useMediaQuery from "../../../../useMediaQuery";
import Dropdown from "../../../../common-components/Dropdown/Dropdown";

const Nav = () => {

  const mobile = useMediaQuery("(max-width: 500px)");

  if (mobile) {
    return (
      <nav>
        <Dropdown name={"Navigation"} content={[
          <a href="#">Furniture</a>,
          <a href="#">Shop</a>,
          <a href="#">About Us</a>,
          <a href="#">Contact</a>
        ]}/>
      </nav>
    )
  }

  return (
    <nav className={classes.nav}>
      <a href="#">Furniture</a>
      <a href="#">Shop</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </nav>
  );
};

export default Nav;
