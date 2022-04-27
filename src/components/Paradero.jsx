import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { DatosMicro } from "./DatosMicro";

export const Paradero = ({ codigo }) => {
  const { data, isLoading, error } = useFetch(
    `https://api.xor.cl/red/bus-stop/${codigo}`
  );

  return (
    <>
      {isLoading && (
        <h5 className="text-center">Buscando datos del paradero...</h5>
      )}

      {error && (
        <div className="col-xl-12 col-md-12 mb-3">
          <div class="card mb-4 py-3 border-bottom-danger">
            <div className="h5 font-weight-bold text-gray-800 mb-1 px-4">
              Código ingresado no válido!
            </div>
          </div>
        </div>
      )}

      {data && (
        <div className="col-xl-12 col-md-12 mb-3">
          <div className="card shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    PARADERO: {data.id}
                  </div>
                  <div className="h5 font-weight-bold text-gray-800 mb-1">
                    {data.name}
                  </div>

                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    RECORRIDOS:
                    <span>
                      {data.services.map((servicio) => {
                        return (
                          <label
                            key={servicio.id}
                            className="btn btn-primary btn-circle btn-sm m-2 text-xs"
                          >
                            {servicio.id}
                          </label>
                        );
                      })}
                    </span>
                  </div>
                </div>
                <div className="col-auto">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/3124/premium/3124381.png?token=exp=1650940295~hmac=4b21bb5f1dd885e659dc795d37483db7"
                    width="80vh"
                    alt=""
                  />
                </div>
              </div>
              <hr />

              {data.services.map((servicio) => {
                return (
                  <DatosMicro
                    key={servicio.id}
                    nombre={servicio.id}
                    estado={servicio.valid}
                    desc_estado={servicio.status_description}
                    buses={servicio.buses}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
  
    </>
  );
};
