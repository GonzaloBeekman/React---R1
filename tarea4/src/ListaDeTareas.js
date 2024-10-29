// ListaDeTareas.js
import React, { useState } from 'react';
import './App.css';

function ListaDeTareas() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim()) {
      setTareas([...tareas, { texto: tarea, completada: false }]);
      setTarea('');
    }
  };

  const marcarCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div className="lista-de-tareas">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((t, index) => (
          <li
            key={index}
            onClick={() => marcarCompletada(index)}
            style={{ textDecoration: t.completada ? 'line-through' : 'none' }}
          >
            {t.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;
