import './../App.css';
import React from 'react';

function FindedPeople() {
  return (
    <div>
      <form className="form">
        <h3> Ingresa los datos de la persona que se encontró</h3>
        <label>
          Nombre(s)
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Apellido(s)
          <input type="text" name="surname" />
        </label>
        <br />

        <label>
          Fecha de Nacimiento
          <input type="date" name="birhtdate" />
        </label>
        <br />

        <input type="submit" value="Enviar" />
      </form>
    </div >
  );
}


export default FindedPeople;
