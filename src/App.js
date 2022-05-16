import './App.css';
import Boton from './Button/Boton';
import Contador from './Contador/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

const onClick = () => {
  setNumClics(setNumClics + 1)
}

const reiniciarContador = () => {
  setNumClics(0)
}

  return (
    
    <div className="App">

      <h1>Hello World</h1>

      <Boton 
      text= 'Sumar'
      onClick={onClick}/>

      <Boton 
      text= 'Reiniciar'
      onClick={reiniciarContador}/>

      <Contador 
      numClics={numClics}/>

    </div>

  );
}

export default App;