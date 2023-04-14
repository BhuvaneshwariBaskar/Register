import React from "react";

const Input = ({id,type,label,onChangeValue}) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} className="name" onChange={onChangeValue} />
    </div>
  );
};

export default Input;
