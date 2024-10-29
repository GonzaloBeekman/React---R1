import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className='App'>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button> 
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}
export default Contador;
