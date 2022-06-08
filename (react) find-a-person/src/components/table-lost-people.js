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
            <table className='TableLostPeople'>
              <tr>
                <th>{element.curp}</th>
                <th>{element.first_name}</th>
                <th>{element.last_name}</th>
                <th>{element.birthdate}</th>
                <th>{element.last_seen}</th>
              </tr>
            </table>
          </div >
      ))
    }
  </div>
  )
}