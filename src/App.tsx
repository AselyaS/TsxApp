import React, { useState } from 'react';
import store from "./store";
import { Slider } from '@rmwc/slider';
import '@material/slider/dist/mdc.slider.css';
import './App.css';
function App({ state }: { state: any }) {
  const [width, setWidth] = useState(500)
  const [height, setHeight] = useState(500)
  console.log("render!")
  const { radius } = state
  const handleClick = () => {
    const newWidth = Math.floor((Math.random() * 400) + 100)
    const newHeight = Math.floor((Math.random() * 400) + 100)
    setWidth(newWidth)
    setHeight(newHeight)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-controls">
          {radius}
          <Slider className="circle-slider" min={20} max={500} value={radius} discrete step={1}
            onInput={(event) => {
              const newRadius = event.detail.value
              store.dispatch({ type: 'SET_CIRCLE_RADIUS', payload: newRadius })
            }}
          />
          <button onClick={handleClick}>Cheese!</button>
          <img src={`https://images.unsplash.com/profile-1449546653256-0faea3006d34?i${width}/${height}`} alt="Cheese!" />
        </div>
      </header>
    </div>
  );
}
export default App;
