import './../App.css';
import React, { useEffect, useState } from 'react';
import {getAllLostPersons} from '../services/LostPersonService'

export default function TableLostPeople(){
  const [LostPerson, setLostPerson] = useState([])

  useEffect(()=>{
    const data = getAllLostPersons();
    console.log(data);
    //setLostPerson(data);
  },[])


  return(
    <div>
      {

        LostPerson.map((element)=>(
          <div>
            <h2> Personas Extraviadas</h2>
            <div class='Table-content'>
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