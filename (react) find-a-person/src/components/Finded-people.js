import './../App.css';
import React from 'react';
import {createFoundPerson} from '../services/FoundPersonService'

export default class FindedPeople extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      curp : "",
      first_name : "",
      last_name : "",
      birth_date : "",
      found_date : "",
      address : "",
      hospitalized : false,
      condition : "",
      more_info : ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleSubmit(event) {
    createFoundPerson(this.state);
    alert('Los datos han sido registrados correctamente');
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3> Ingresa los datos de la persona que se encontró</h3>
          <label>
            CURP
            <input type="text" name="curp" value={this.state.curp} onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Nombre(s)
            <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Apellido(s)
            <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Fecha de Nacimiento
            <input type="date" name="birh_date" value={this.state.birth_date} onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Día que se encontró
            <input type="date" name="found_date" value={this.state.found_date} onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Lugar donde se encontró
            <input type="text" name="address" value={this.state.address} onChange={this.handleInputChange}/>
          </label>
          <br />
            <label>
              ¿Está hospitalizado?
                <label><input type="checkbox" id="si" name="hospitalized" value={this.state.hospitalized} onChange={this.handleInputChange}/>Sí</label>
            </label>
          <br />
          <label>
            Condición
            <input type="text" name="condition" value={this.state.condition} onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Más información
            <input type="text" name="more_info" value={this.state.more_info} onChange={this.handleInputChange}/>
          </label>
          <br />
          <input type="submit" value="Enviar" />
        </form>
      </div >
    );
  }
}