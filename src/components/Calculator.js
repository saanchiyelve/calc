import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (number) => {
    if (shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  };

  const handleOperator = (operator) => {
    setShouldResetDisplay(true);
    setExpression(expression + display + operator);
    setDisplay('0');
  };

  const handleDecimal = () => {
    if (shouldResetDisplay) {
      setDisplay('0.');
      setShouldResetDisplay(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
    setShouldResetDisplay(false);
  };

  const handleEquals = () => {
    try {
      const fullExpression = expression + display;
      const result = eval(fullExpression);
      setDisplay(String(result));
      setExpression('');
      setShouldResetDisplay(true);
    } catch (error) {
      setDisplay('Error');
      setExpression('');
      setShouldResetDisplay(true);
    }
  };

  const handlePercentage = () => {
    try {
      const currentValue = parseFloat(display);
      const percentage = currentValue / 100;
      setDisplay(String(percentage));
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleParentheses = (parenthesis) => {
    if (shouldResetDisplay) {
      setDisplay(parenthesis);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display + parenthesis);
    }
  };

  const buttonConfig = [
    { text: 'C', type: 'clear', onClick: handleClear },
    { text: '(', type: 'parentheses', onClick: () => handleParentheses('(') },
    { text: ')', type: 'parentheses', onClick: () => handleParentheses(')') },
    { text: '÷', type: 'operator', onClick: () => handleOperator('/') },
    
    { text: '7', type: 'number', onClick: () => handleNumber('7') },
    { text: '8', type: 'number', onClick: () => handleNumber('8') },
    { text: '9', type: 'number', onClick: () => handleNumber('9') },
    { text: '×', type: 'operator', onClick: () => handleOperator('*') },
    
    { text: '4', type: 'number', onClick: () => handleNumber('4') },
    { text: '5', type: 'number', onClick: () => handleNumber('5') },
    { text: '6', type: 'number', onClick: () => handleNumber('6') },
    { text: '−', type: 'operator', onClick: () => handleOperator('-') },
    
    { text: '1', type: 'number', onClick: () => handleNumber('1') },
    { text: '2', type: 'number', onClick: () => handleNumber('2') },
    { text: '3', type: 'number', onClick: () => handleNumber('3') },
    { text: '+', type: 'operator', onClick: () => handleOperator('+') },
    
    { text: '0', type: 'number', onClick: () => handleNumber('0'), span: 2 },
    { text: '.', type: 'decimal', onClick: handleDecimal },
    { text: '=', type: 'equals', onClick: handleEquals },
    { text: '%', type: 'percentage', onClick: handlePercentage },
  ];

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="expression">{expression}</div>
        <div className="current-value">{display}</div>
      </div>
      <div className="calculator-buttons">
        {buttonConfig.map((button, index) => (
          <Button
            key={index}
            text={button.text}
            type={button.type}
            onClick={button.onClick}
            span={button.span}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator; 