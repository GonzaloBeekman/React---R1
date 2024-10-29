function TarjetaPresentacion({ nombre, apellido, profesion,edad,estado }) {
    return (
      <div className="tarjeta">
        <h2>{nombre} {apellido}</h2>
        <p>{edad}</p>
        <p>{estado}</p>
        <p>{profesion}</p>
        
      </div>
    );
  }
  export default TarjetaPresentacion;