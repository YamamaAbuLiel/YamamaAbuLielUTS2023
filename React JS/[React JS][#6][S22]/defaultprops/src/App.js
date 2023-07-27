import React from 'react';
import './App.css';
import Person from './Person';

const App = ({ persons }) => {
  

  if (!persons || persons.length === 0) {
    return (
      <div>
        <Person name="Person 1" eyeColor="blue" age="23" />
        <Person name="Person 2" eyeColor="blue" />
        <Person name="Person 3" age="23" />
        <Person eyeColor="green" age="23" />
      </div>
    );
  }

  return <div>{persons.map((person) => person)}</div>;
};


export default App;
