import React from 'react';

import './style.css';

function Button(props) {
  return (
    <button
      onClick={props.onBtnClick}
      className={`btn ${props.color}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
