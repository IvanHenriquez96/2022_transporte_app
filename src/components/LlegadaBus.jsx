import React from "react";

export const LlegadaBus = (props) => {
  const { patente, maximo, metros } = props;

  return (
    <div className="small font-weight-bold mb-1">
      Patente: {patente} | Distancia: {metros} Metros | Tiempo estimado:{" "}
      {maximo} Minutos
      <hr />
    </div>
  );
};
