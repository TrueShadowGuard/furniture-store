import React from 'react';
import classes from "./WhyChosingUs.module.css";
import Container from "../../../../common-components/Container/Container";
import ArrowRight from "../../../../images/arrow-right.svg";

const WhyChosingUs = () => {
  return (
    <Container>
      <div className={classes.whyChosingUs}>
        <h1>Why Choosing Us</h1>
        <div>
          <h2>Luxury facilities</h2>
          <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around
            facilities.</p>
          <a href={"#"} className={classes.moreInfo}>
            <span>More Info</span>
            <img src={ArrowRight} alt={"arrow right"} />
          </a>
        </div>
        <div>
          <h2>Affordable Price</h2>
          <p>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that
            are oly here.</p>
          <a href={"#"} className={classes.moreInfo}>
            <span>More Info</span>
            <img src={ArrowRight} alt={"arrow right"} />
          </a>
        </div>
        <div>
          <h2>Many Choices</h2>
          <p>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
          <a href={"#"} className={classes.moreInfo}>
            <span>More Info</span>
            <img src={ArrowRight} alt={"arrow right"} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default WhyChosingUs;
