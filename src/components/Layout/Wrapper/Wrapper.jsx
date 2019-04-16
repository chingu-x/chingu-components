import React from "react";
import { wrapper } from "./Wrapper.module.scss";

const Wrapper = ({ children }) => (
  <div className={wrapper}>{children}</div>
);

export default Wrapper;