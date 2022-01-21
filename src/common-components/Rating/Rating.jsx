import React from 'react';
import classes from "./Rating.module.css"

import StarLight from "../../images/Star.svg";
import StarDark from "../../images/Start-dark.svg";

const Rating = (props) => {

  const className = props.className ? props.className + " " + classes.rating : classes.rating;

  const stars = [...new Array(5)]
    .fill(<img src={StarLight} alt={"light star"} />, 0, props.value)
    .fill(<img src={StarDark} alt={"dark star"} />, props.value);

  return (
    <div className={className}>
      {stars}
    </div>
  );
};

export default Rating;
