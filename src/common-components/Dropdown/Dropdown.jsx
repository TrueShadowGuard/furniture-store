import React from 'react';
import {useState} from "react";
import classes from "./Dropdown.module.css"

const Dropdown = ({content, name}) => {

  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(!open);

  return (
    <div className={classes.menu}>
      <button className={classes.button} onClick={onClick}>{name}</button>
      <div className={classes.content} hidden={!open}>
        {content.map(element => <div className={classes.contentItem}>{element}</div>)}
      </div>
    </div>
  );
};

export default Dropdown;
