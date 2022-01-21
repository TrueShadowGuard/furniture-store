import React from 'react';
import Container from "../../../../common-components/Container/Container";
import classes from "./Footer.module.css";

import Instagram from "../../../../images/insta.svg";
import Facebook from "../../../../images/fb.svg";
import Twitter from "../../../../images/twitter.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container maxWidth={"1064px"}>
        <div className={classes.flex}>
          <div>
            <h1>Panto</h1>
            <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          </div>
          <div>
            <h2>Services</h2>
            <a href="#">Email Marketing</a>
            <a href="#">Campaigns</a>
            <a href="#">Branding</a>
          </div>
          <div>
            <h2>Furniture</h2>
            <a href="#">Beds</a>
            <a href="#">Chair</a>
            <a href="#">All</a>
          </div>
          <div className={classes.followUs}>
            <h2>Follow Us</h2>
            <a href={"#"}>
              <img src={Facebook} alt="Facebook"/>
              <span>Facebook</span>
            </a>
            <a href={"#"}>
              <img src={Twitter} alt="Twitter"/>
              <span>Twitter</span>
            </a>
            <a href={"#"}>
              <img src={Instagram} alt="Instagram"/>
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className={classes.copyright}>
          <h1>Copyright © 2021</h1>
          <div className={classes.copyrightLinks}>
            <a href={"#"}>Terms & Conditions</a>
            <a href={"#"}>Privacy Policy</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
