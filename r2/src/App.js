import './App.css';
import React from 'react';
import TarjetaPresentacion from './TarjetaPresentacion';
function App() {
  return (
    <div className="App">
      <h1>Esta es mi Presentacion</h1>
      <TarjetaPresentacion 
        nombre="Gonzalo" 
        apellido="Beekman" 
        edad="Edad: 19"
        estado="Estado Civil: Soltero"
        profesion="Profesion actual: Estudiante de Informatica" 
      />
    </div>
  );
}

export default App;