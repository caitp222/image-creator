import React from 'react';

const Icon = (props) => {
  const { onClick, innerText } = props;
  return(
    <i onClick={onClick} className="material-icons">{innerText}</i>
  )
};

export default Icon;
