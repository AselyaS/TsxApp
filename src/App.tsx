import React, { useState } from 'react';
import './App.css';
import { Circle } from 'react-shapes';
import { Ellipse } from 'react-shapes';
import Circle2 from './components/Circle2';
import { Slider } from '@rmwc/slider';
import '@material/slider/dist/mdc.slider.css';

function App() {
  const [radius, setRadius] =useState(150)
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-controls">
        {radius}
          {/* <className = "App-Circle1"> */}
          
        <Slider className= "circle-slider" min={20} max={200} value={radius} discrete step={1} 
         onInput={(event) => {
          const newRadius = event.detail.value

          setRadius(newRadius)
        }}
        />
        </div>
        <div>
  
        <Circle r={radius} fill={{color: '#19F1EB'}} stroke={{color:'#22D8D3'}} strokeWidth={35} />
        </div>
        </header>
        {/* <div
           className = "App-Circle2"  
        > 
          <Circle2 />
        </div>
       */}
        
       
       <h1>React-Shape!</h1>
    
    </div>
  );
}

export default App;
