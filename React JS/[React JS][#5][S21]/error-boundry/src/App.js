import React from 'react';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';




  
import './App.css'  
  


  
function App() {  
  return (  
    <div>  
      <h1><b> Error Boundary Sample</b></h1>  
      <hr />  
      <ErrorBoundary>  
        <p>These two counters are inside the same error boundary.If one crashes,the error boundary will replace both of them </p>  
         <Counter/> 
         <Counter/> 
      </ErrorBoundary>  
      <hr />  
      <p>These two counters each inside of their own error boundary.So if one crashes,the other is not effected </p>  
        <ErrorBoundary><Counter /></ErrorBoundary>  
        <ErrorBoundary><Counter /></ErrorBoundary>  
    </div>  
  );  
}  
export default App  
