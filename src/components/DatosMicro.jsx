import React, { useState } from "react";
import { LlegadaBus } from "./LlegadaBus";

export const DatosMicro = (props) => {
  const { nombre, estado, desc_estado, buses } = props;

  return (
    <div
      className={
        estado === true
          ? "card mb-4 py-3 border-left-success"
          : "card mb-4 py-3 border-left-danger"
      }
    >
      <div className="card-body">
        <div className="h5 font-weight-bold text-gray-800 mb-1">
          RECORRIDO: {nombre}
          <hr />
          {!estado && (
            <div className="small font-weight-bold mb-1">
              No hay buses cerca
            </div>
          )}
          {buses.map((bus) => (
            <LlegadaBus
              key={bus.id}
              patente={bus.id}
              minimo={bus.min_arrival_time}
              maximo={bus.max_arrival_time}
              metros={bus.meters_distance}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
