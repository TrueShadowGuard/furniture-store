import React from 'react';
import Add from "../../../../../../images/Add.svg";
import classes from "./ProductCard.module.css";
import Rating from "../../../../../../common-components/Rating/Rating";

const ProductCard = ({product, onAddClick}) => {
  const {image, name, type, rating, priceCurrency, priceValue} = product;
  return (
    <div className={classes.product}>
      <div className={classes.imgContainer}>
        <img src={image} alt={""}/>
      </div>
      <div className={classes.infoContainer}>
        <span className={classes.type}>{type}</span>
        <h1 className={classes.name}>{name}</h1>
        <Rating value={rating} className={classes.rating}/>
        <div className={classes.priceAndAdd}>
          <div className={classes.price}>
            <span className={classes.priceCurrency}>{priceCurrency}</span>
            <span className={classes.priceValue}>{priceValue}</span>
          </div>
          <img className={classes.add} src={Add} alt={"add to basket"}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
