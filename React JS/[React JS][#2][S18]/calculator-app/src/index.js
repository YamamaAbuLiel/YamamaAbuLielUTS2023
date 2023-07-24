import React, { useState } from 'react';
import "./index.css"

import ReactDOM from 'react-dom';

import ButtonPanel from './ButtonPanel';
import Display from './Display';
const math = require('mathjs');

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
 

  const clickHandler = (name) => {
    setDisplayValue((prevValue) => prevValue + name);

    const calculateResult = () => {
      try {
        
        const result = math.evaluate(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    };
    if (name === 'AC') {
      setDisplayValue('');
    }
    if(name==="=")
    {
      calculateResult();
  
    }
    

   

  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonPanel clickHandler={clickHandler} />
    </div>
  );
};

export default App;



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);