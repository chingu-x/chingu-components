import React from "react";
import classnames from "classnames";
import { text, small, bold } from "./Text.module.scss";

const Text = (props) => {
  const {
    children,
    small: isSmall,
    bold: isBold
  } = props;

  return (
    <p className={classnames(text, isSmall && small, isBold && bold)}>{children}</p>
  );
};

export default Text;