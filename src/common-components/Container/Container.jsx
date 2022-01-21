import React from 'react';
import useMediaQuery from "../../useMediaQuery";

const Container = props => {
  const maxWidth = props.width || "1290px";
  const screenIsSmall = useMediaQuery(`(max-width: ${maxWidth}`);

  const style = {
    maxWidth,
    marginLeft: "auto",
    marginRight: "auto"
  };

  if(screenIsSmall) {
    style.paddingLeft = "20px";
    style.paddingRight = "20px";
  }

  if(props.style) Object.assign(style, props.style);

  return (
    <div {...props} style={style}/>
  );
};

export default Container;
