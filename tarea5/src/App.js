import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className='App'>
      {!enviado ? (
        <form onSubmit={manejarEnvio}>
          <label>Nombre: </label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <h1>¡Bienvenido, {nombre}!</h1>
      )}
    </div>
  );
}

export default Formulario;
