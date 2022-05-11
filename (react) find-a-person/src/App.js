import React from 'react';
import Tabs from "./components/Tabs";
import LostPerson from "./components/lost-person";
import FindedPeople from "./components/Finded-people"
import TableLostPeople from './components/table-lost-people';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Find a Person</h1>
        <Tabs>
          <div label="Registro Persona Extraviada">
            <LostPerson />
          </div>
          <div label="Personas Encontradas">
            <FindedPeople />
          </div>
          <div label="Tabla de Personas ">
            <TableLostPeople />
          </div>
        </Tabs>
      </header>
    </div>
  );
}

export default App;

