import React from "react";

const Input = ({id,type,label,onChangeValue,placeholder}) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        className="name"
        onChange={onChangeValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

