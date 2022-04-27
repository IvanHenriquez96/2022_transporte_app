import { useState } from "react";
// import './App.css';
import { FormBuscarParadero } from "./components/FormBuscarParadero";
import { Paradero } from "./components/Paradero";

function App() {
  const [codigo, setCodigo] = useState("");

  return (
    <div className="App container">
      <h2 class=" mx-3 mt-3 font-weight-bold text-primary text-center">{"<IHENRIQUEZ />"}</h2>

      <FormBuscarParadero setCodigo={setCodigo} />

      {codigo.length > 0 ? <Paradero codigo={codigo} /> : ""}
    </div>
  );
}

export default App;
