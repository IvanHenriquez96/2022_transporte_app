import { useState } from 'react';
// import './App.css';
import { FormBuscarParadero } from './components/FormBuscarParadero';
import { Paradero } from './components/Paradero';


function App() {

  const [codigo, setCodigo] = useState('');

  return (

    <div className="App container">

      

      <FormBuscarParadero setCodigo={setCodigo} />

      {codigo.length > 0 ? <Paradero codigo={codigo}/> : ""}
      


    </div>
  );
}

export default App;
