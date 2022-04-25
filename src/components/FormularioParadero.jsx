import React, { useState } from "react";
import axios from "axios";
import { DatosParadero } from "./DatosParadero";

export const FormularioParadero = () => {
  const [codigo, setCodigo] = useState(null);
  // const [datosParadero, setDatosParadero] = useState({});

  const cargarCodigo = async (e) => {
    e.preventDefault();
    setCodigo(e.target.codigoParadero.value);
  };

  return (
    <>
      <form onSubmit={cargarCodigo}>
        <input
          type="text"
          className="form-control mb-3"
          name="codigoParadero"
          id="inputParadero"
          placeholder="Ingrese código del paradero"
        />

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary mb-3">
            Ver Datos Paraderos
          </button>
        </div>
      </form>

      {!codigo ? (
        <h1>Busque su paradero</h1>
      ) : (
        <DatosParadero codigo={codigo} />
      )}

    </>
  );
};
