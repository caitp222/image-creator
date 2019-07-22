import React from 'react';
import Icon from './icon';

const Button = (props) => {
  const { onClick, className, innerText, iconText } = props;
  return(
    <button
      onClick={onClick}
      className={className}
    >
      {
        iconText ?
          <Icon innerText={iconText} /> :
          null
      }
      {innerText}
    </button>
  )
};

export default Button;
