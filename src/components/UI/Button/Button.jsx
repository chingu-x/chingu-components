import React from "react";
import classnames from "classnames";
import { btn, primary } from "./Button.module.scss";

const Button = ({ primary: isPrimary, children }) => {
  return (
    <button className={classnames(btn, isPrimary && primary)} type="button">{children}</button>
  );
};

export default Button;