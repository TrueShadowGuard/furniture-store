import React from 'react';
import classes from "./Search.module.css";
import SearchImg from "../../../../images/Search.svg";

const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.inputContainer}>
        <input type="text" placeholder={"Search furniture"}/>
      </div>
      <button className={classes.searchButton}>
        <img src={SearchImg} alt=""/>
      </button>
    </div>
  );
};

export default Search;
