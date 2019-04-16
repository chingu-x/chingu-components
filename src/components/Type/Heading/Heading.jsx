import React from "react";
import classnames from "classnames";
import { heading, secondary } from "./Heading.module.scss";

const Heading = (props) => {
  const {
    children,
    secondary: isSecondary
  } = props;

  return isSecondary
    ? <h3 className={classnames(heading, secondary)}>{children}</h3>
    : <h1 className={heading}>{children}</h1>;
};

export default Heading;