import React, { useState } from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'


type Pokemon = {
  name: string
  id: number
  sprites: {
    front_default: string
    front_shiny: string
  }
}
function App() {
  const [input, setInput] = useState("")
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [error, setError] = useState(false)
  const [show, setShow] = useState(true);
  const handleInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    setInput(event.currentTarget.value)
  }
  const handleSubmit = async () => {
    
    // Take current 'input' and submit to API
    setError(false)
    try {
      const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      console.log("response status: ", pokemonResponse.status)
      if (pokemonResponse.status === 404) {
        console.error("Pokemon not found!")
        setError(true)
      } else {
        try {
          const pokemonJsObj = await pokemonResponse.json()
          setPokemon(pokemonJsObj)
          console.log("pokemon: ", pokemonJsObj)
        } catch (error) {
          console.error("Json error that we caught: ", error)
        }
      }
    } catch (error) {
      console.error("Network error: ", error)
    }
  }
  if (show) {
    return (

    <div className="App">
      <header className="App-header">
        <div className="App-controls">
          <input type="text" onChange={handleInput} value={input} />
          <button onClick={handleSubmit}>Who's that Pokemon?</button>
          {error && (
              
                  <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    Could not find a Pokemon with that name
                  </Alert>
                
       
          )}
            
          {pokemon && (
            <>
              <div>
              <h1 className="heading" style={{color:"lightblue", fontSize:20}}> 
                name:
              </h1>
              </div>
              
              <div>
                #{pokemon.id}
              </div>
              <img src={pokemon.sprites.front_default} />
              <img src={pokemon.sprites.front_shiny} />
            </>
          )}
        </div>
      </header>
    </div>
    
    
  );
}

return <Button onClick={() => setShow(true)}>Show Alert</Button>;

}
export default App;