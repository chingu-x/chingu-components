import React, { useState } from "react";
import { container, checkmark } from "./Radio.module.scss";

const Radio = props => {
  const {
    value: defaultValue = false,
    name,
    options = [],
    onChange
  } = props;

  const [checkedValue, setCheckedValue] = useState(defaultValue);

  const handleChange = e => {
    const isChecked = e.target.checked;

    let newValue = e.target.value;
    if(!isChecked && checkedValue === e.target.value) {
      newValue = false;
    }

    if (onChange) {
      onChange(newValue);
    }
    setCheckedValue(newValue);
  };

  const renderOption = (option) => (
    <label key={option.value} className={container}>
      {option.text}
      <input
        type="radio"
        onChange={handleChange}
        name={name}
        value={option.value}
        checked={checkedValue === String(option.value)}
      />
      <span className={checkmark}></span>
    </label>
  );
  
  return <div>{options.map(renderOption)}</div>;
};

export default Radio;
