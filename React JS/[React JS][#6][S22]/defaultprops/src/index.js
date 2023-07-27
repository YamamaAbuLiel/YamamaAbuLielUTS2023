import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Person from './Person';
//This List for test if the it will be replaced with the default person
const personsList = [
  <Person name="Yamama" eyeColor="brown" age="22" key="1" />,
  <Person name="Dalal" eyeColor="green" age="40" key="2" />,
  <Person name="Osama" eyeColor="brown" age="50" key="3" />,
];

ReactDOM.render(
  <React.StrictMode>
    <App persons={personsList} />
  </React.StrictMode>,
  document.getElementById('root')
);
