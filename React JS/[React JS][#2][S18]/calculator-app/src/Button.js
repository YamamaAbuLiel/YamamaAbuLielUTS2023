import React from "react";
import './Button.css'

export default function Button (props)
{
    const { name, orangeColor, wide, clickHandler }=props;
    let buttonBackgroundColor;
    let fontColor;
    if (orangeColor) {
      buttonBackgroundColor = 'rgb(245, 146, 62)';
      fontColor='rgb(255, 255, 255)';
      
    } else {
      buttonBackgroundColor = 'rgb(224, 224, 224)';
    }
  
    let buttonWidth;
    if (wide) {
      buttonWidth = '50%';
    } else {
      buttonWidth = '25%';
    }
    const buttonStyle = {
      backgroundColor: buttonBackgroundColor,
      width:buttonWidth,
      color:fontColor,
    };
  
    if(name==="/"){
      return <button className="button" style={buttonStyle} onClick={() => clickHandler(name)}>÷</button>
    }
    else if(name==="*"){
      return <button className="button" style={buttonStyle} onClick={() => clickHandler(name)}>X</button>
    }
  
    else{
    
    return (
      <button className="button" style={buttonStyle} onClick={() => clickHandler(name)}>
        {name}
      </button>
    );
    }
}