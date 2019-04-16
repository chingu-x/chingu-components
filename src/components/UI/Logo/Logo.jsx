import React from "react";
import LogoPNG from "./Logo.png";
import { logo } from "./Logo.module.scss";

const Logo = ({ imageOnly = false }) => (
  <div className={logo}>
    <img src={LogoPNG} alt="Logo" />
    {!imageOnly && <span>Chingu</span>}
  </div>
);

export default Logo;
