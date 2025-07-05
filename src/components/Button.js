import React from 'react';
import './Button.css';

const Button = ({ text, type, onClick, span = 1, className = '' }) => {
  const buttonClass = `calculator-button ${type}-button ${className}`;
  
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      style={{ gridColumn: span > 1 ? `span ${span}` : undefined }}
    >
      {text}
    </button>
  );
};

export default Button; 