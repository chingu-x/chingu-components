import React from "react";
import classnames from "classnames";
import { column, reverse, bleed, wrap } from "./Column.module.scss";

const Column = props => {
  const {
    reverse: isReversed = false,
    wrap: isWrapped = false,
    bleed: isBleed = false,
    children,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={classnames(
        column,
        isReversed && reverse,
        isWrapped && wrap,
        isBleed && bleed
      )}
    >
      {children}
    </div>
  );
};

export default Column;
