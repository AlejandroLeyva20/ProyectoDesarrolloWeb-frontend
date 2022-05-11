import './../App.css';
import React from 'react';

function TableLostPeople() {
  return (
    <div>
      <h2> Personas Extraviadas</h2>
      <table className='TableLostPeople'>
        <tr>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Fecha de Nacimeinto</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div >
  );
}


export default TableLostPeople;
