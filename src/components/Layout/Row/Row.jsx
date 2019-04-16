import React from "react";
import classnames from "classnames";
import { row, reverse, bleed, wrap } from "./Row.module.scss";

const Row = props => {
  const {
    reverse: isReversed = false,
    wrap: isWrapped = true,
    bleed: isBleed = false,
    children,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={classnames(
        row,
        isReversed && reverse,
        isWrapped && wrap,
        isBleed && bleed
      )}
    >
      {children}
    </div>
  );
};

export default Row;
