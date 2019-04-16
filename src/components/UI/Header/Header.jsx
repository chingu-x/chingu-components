import React from "react";
import classnames from "classnames";
import Wrapper from "../../Layout/Wrapper"
import { header, elevated } from "./Header.module.scss";

function Header(props) {
  const { children, elevated: isElevated } = props;

  return (
    <div className={classnames(header, isElevated && elevated)}>
      <Wrapper>
        {children}
      </Wrapper>
    </div>
  );
} 

export default Header;
