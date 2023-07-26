import React from "react";


class Counter extends React.Component {  
    constructor(props) {  
      super(props);  
      this.state = { counter: 0 };  
      this.handleClick = this.handleClick.bind(this);  
    }  
      
    handleClick() {  
      this.setState(({counter}) => ({  
        counter: counter + 1  
      }));  
    }  
      
    render() {  
        //To Test if it works probably 
      if (this.state.counter === 5) {  
        throw new Error('I crashed!');  
      }  
      return <div id="Counter">
        <button onClick={this.handleClick}>{this.state.counter}</button> 

      </div>
       
    }  
  }  
export default Counter;
