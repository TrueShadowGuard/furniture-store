import React from 'react';
import BasketImg from "../../../../images/Basket.svg";
import classes from "./Basket.module.css";

const Basket = ({count}) => {
  return (
    <div className={classes.basket}>
      <img src={BasketImg} alt={"basket"}/>
      <div className={classes.counter}>{count || 0}</div>
    </div>
  );
};

export default Basket;
