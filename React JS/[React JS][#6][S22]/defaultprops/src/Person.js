import React from "react";

export default function Person(props){
    const { name = 'Zeyad', eyeColor = 'deepblue', age = 35 }=props;
    return (
    <div>
      <p>Name: {name}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Age: {age}</p>
      <hr/>
    </div>
  );

}