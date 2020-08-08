import React from 'react';
import './App.css';
import { Circle } from 'react-shapes';
import { Ellipse } from 'react-shapes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Circle r={200} fill={{color: '#19F1EB'}} stroke={{color:'#22D8D3'}} strokeWidth={35} />
       
       <h1>React-Shape!</h1>
      </header>
    </div>
  );
}

export default App;
