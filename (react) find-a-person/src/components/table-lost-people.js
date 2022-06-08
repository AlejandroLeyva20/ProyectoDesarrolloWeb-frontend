import './../App.css';
import React, { useEffect, useState } from 'react';
import {getAllLostPersons} from '../services/LostPersonService'

export default function TableLostPeople(){
  const [LostPerson, setLostPerson] = useState([])

  useEffect(()=>{
    const data = getAllLostPersons().then((res) =>{
      setLostPerson(res);
    })
  },[])


  return(
    <div>
      {

        LostPerson.map((element)=>(
          <div>
            <h2> Personas Extraviadas</h2>
            <div class='table-headers'>
              <h2>CURP</h2>
              <h2>Nombre(s)</h2>
              <h2>Apellido(s)</h2>
              <h2>Fecha de Nacimiento</h2>
              <h2>Última vez vist@</h2>
            </div>  
            <div class='table-content'>
                <p>{element.curp}</p>
                <p>{element.first_name}</p>
                <p>{element.last_name}</p>
                <p>{element.birthdate}</p>
                <p>{element.last_seen}</p>
            </div>
          </div >
      ))
    }
  </div>
  )
}