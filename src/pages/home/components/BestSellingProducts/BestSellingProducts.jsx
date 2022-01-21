import React from 'react';
import classes from "./BestSellingProducts.module.css";
import Container from "../../../../common-components/Container/Container";
import ProductCard from "./components/ProductCard/ProductCard";
import ArrowRight from "../../../../images/arrow-right.svg";

import chair1 from "../../../../images/chair.png";
import chair2 from "../../../../images/chair2.png";
import {useState} from "react";

const products = [
  {image: chair1, name: "Sakarias Armchair", type: "Chair", rating: 4, priceValue: 392, priceCurrency: "$"},
  {image: chair2, name: "Baltsar Chair", type: "Chair", rating: 5, priceValue: 296, priceCurrency: "$"}
]

const BestSellingProducts = () => {

  const [selected, setSelected] = useState("Chair");

  const onClick = name => e => {
    setSelected(name);
  }

  const ProductButton = ({name}) => (
    <button className={(selected === name) ? classes.selected : ""}
            onClick={onClick(name)}>
      {name}
    </button>
  );

  return (
    <div className={classes.main}>
      <Container>
        <h1 className={classes.header}>Best Selling Product</h1>
        <div className={classes.selectProductType}>
          <ProductButton name={"Chair"}/>
          <ProductButton name={"Beds"}/>
          <ProductButton name={"Sofa"}/>
          <ProductButton name={"Lamp"}/>
        </div>
        <div className={classes.products}>
          <ProductCard product={products[0]}/>
          <ProductCard product={products[1]}/>
          <ProductCard product={products[0]}/>
          <ProductCard product={products[1]}/>
        </div>
        <a className={classes.viewAll} href={"#"}>
          <span>View All</span>
          <img alt={""} src={ArrowRight}/>
        </a>
      </Container>
    </div>
  );
};

export default BestSellingProducts;
