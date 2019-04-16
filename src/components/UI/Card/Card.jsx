import React from "react";
import classnames from "classnames";
import { card, elevated } from "./Card.module.scss";

const Card = (props) => {
  const { children, elevated: isElevated, ...rest } = props;

  return (
    <div {...rest} className={classnames(card, isElevated && elevated)}>{children}</div>
  )
};

export default Card;