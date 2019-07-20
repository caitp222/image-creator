import React from 'react';

const Button = (props) => {
  const { onClick, className, innerText } = props;
  return(
    <button onClick={onClick} className={className}>{innerText}</button>
  )
};

export default Button;
