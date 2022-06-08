import './../App.css';
import React, { useEffect, useState } from 'react';
import {getAllFoundPersons} from '../services/FoundPersonService'

export default function TableFoundPeople(){
  const [FoundPerson, setFoundPerson] = useState([])

  useEffect(()=>{
    const data = getAllFoundPersons().then((res) =>{
      setFoundPerson(res);
    })
  },[])


  return(
    <div class="container">
        <h2> Personas Encontradas</h2>
            <div class='table-headers'>
              <h6>CURP</h6>
              <h6>Nombre(s)</h6>
              <h6>Apellido(s)</h6>
              <h6>Fecha de Nacimiento</h6>
              <h6>Fecha en que se encontró</h6>
              <h6>Lugar</h6>
              <h6>¿Está hospitalizad@?</h6>
              <h6>Condición</h6>
              <h6>Más información</h6>
            </div>  
      {
        FoundPerson.map((element)=>(
          <div>
            <div class='table-content'>
                <p>{element.person.curp}</p>
                <p>{element.person.first_name}</p>
                <p>{element.person.last_name}</p>
                <p>{element.person.birth_date}</p>
                <p>{element.found_date}</p>
                <p>{element.address}</p>
                <p>{element.hospitalized}</p>
                <p>{element.condition}</p>
                <p>{element.more_info}</p>
            </div>
          </div >
      ))
    }
  </div>
  )
}