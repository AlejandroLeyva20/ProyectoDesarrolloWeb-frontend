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
    <div>
      {
        LostPerson.map((element)=>(
          <div>
            <h2> Personas Encontradas</h2>
            <div class='table-headers'>
              <h8>CURP</h8>
              <h8>Nombre(s)</h8>
              <h8>Apellido(s)</h8>
              <h8>Fecha de Nacimiento</h8>
              <h8>Fecha en que se encontró</h8>
              <h8>Lugar</h8>
              <h8>¿Está hospitalizad@?</h8>
              <h8>Condición</h8>
              <h8>Más información</h8>
            </div>  
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