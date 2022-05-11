import './../App.css';
import React from 'react';

function LostPerson() {
  return (
    <div>
      <form className="form">
        <h3> Ingresa los datos de la persona a buscar</h3>

        <label>
          CURP
          <input type="text" name="curp" />
        </label>

        <br />

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
          <input type="date" name="birhDate" />
        </label>
        <br />

        <input type="submit" value="Enviar" />
      </form>
    </div >
  );
}


export default LostPerson;
