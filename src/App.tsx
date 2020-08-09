import React from 'react';
import './App.css';
import { Circle } from 'react-shapes';
import { Ellipse } from 'react-shapes';
import Circle2 from './components/Circle2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Circle r={200} fill={{color: '#19F1EB'}} stroke={{color:'#22D8D3'}} strokeWidth={35} />
        <div
           className = "App-Circle2"  
        > 
          <Circle2 />
        </div>
        
       
       <h1>React-Shape!</h1>
      </header>
    </div>
  );
}

export default App;
