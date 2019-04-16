import React, { useState } from "react";
import { select } from "./Select.module.scss";

const Select = props => {
  const { value: defaultValue, options = [], onChange, ...rest } = props;

  const [value, setValue] = useState(defaultValue);

  const handleChange = e => {
    const newValue = e.target.value;

    if (onChange) {
      onChange(newValue);
    }
    setValue(newValue);
  };

  return (
    <select {...rest} className={select} onChange={handleChange} value={value}>
      {options.map((option, i) => (
        <option key={i} value={option.value || option.text}>{option.text}</option>
      ))}
    </select>
  );
};

export default Select;
