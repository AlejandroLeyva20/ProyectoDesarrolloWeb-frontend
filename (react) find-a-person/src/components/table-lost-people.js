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
        <h2> Personas Extraviadas</h2>
        <div class='table-headers'>
          <h5>CURP</h5>
          <h5>Nombre(s)</h5>
          <h5>Apellido(s)</h5>
          <h5>Fecha de Nacimiento</h5>
          <h5>Última vez vist@</h5>
        </div>
        {
        LostPerson.map((element)=>(
          <div>  
            <div class='table-content'>
                <p>{element.curp}</p>
                <p>{element.first_name}</p>
                <p>{element.last_name}</p>
                <p>{element.birth_date}</p>
                <p>{element.last_seen}</p>
            </div>
          </div >
      ))
    }
  </div>
  )
}