import React, { useState } from "react";
import { input } from "./Text.module.scss";

const Text = props => {
  const {
    value: defaultValue = "",
    password: isPassword,
    onChange,
    ...rest
  } = props;

  const [value, setValue] = useState(defaultValue);

  const handleChange = e => {
    const newValue = e.target.value;

    if (onChange) {
      onChange(newValue);
    }
    setValue(newValue);
  };

  return (
    <input
      {...rest}
      className={input}
      type={isPassword ? "password" : "text"}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Text;
