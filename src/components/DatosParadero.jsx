import axios from "axios";
import React, { useEffect, useState } from "react";

export const DatosParadero = (props) => {
  const [paradero, setParadero] = useState(props.codigo);
  const [dataParadero, setDataParadero] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [datosMicros, setDatosMicros] = useState([]);

  useEffect(() => {
    buscarParadero(paradero);
  }, []);

  const buscarParadero = async (paradero) => {
    const response = await axios.get(
      `https://api.xor.cl/red/bus-stop/${paradero}`
    );

    const microsHabilitadas = [];

    await response.data.services.forEach((micro) => {
      if (micro.valid) {
        micro.buses.forEach((bus) => {
          bus.numero_micro = micro.id;
          microsHabilitadas.push(bus);
        });
      }
    });

    setDatosMicros(microsHabilitadas);
    setDataParadero(response.data);
    setIsLoaded(true);
  };

  console.log(datosMicros);

  return (
    <>
      {isLoaded ? (
        <div className="card mb-3 p-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/829/829276.png "
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{dataParadero.name}</h5>
                <p className="card-text">
                  <small className="text-muted">Buses:</small>
                </p>

                <div className="mb-3">
                  {dataParadero.services.map((micro) => {
                    return (
                      <span
                        key={micro.id}
                        className="mx-1 py-1 px-2 border border-primary rounded-pill"
                      >
                        {micro.id}
                      </span>
                    );
                  })}
                </div>

                <div className="list-group">
                  {datosMicros.map((bus) => {
                    return (
                      <div
                        key={bus.id}
                        className="list-group-item list-group-item-action active"
                        aria-current="true"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">{bus.numero_micro}</h5>
                          <small>
                            Tiempo estimado: {bus.min_arrival_time} a{" "}
                            {bus.max_arrival_time} minutos
                          </small>
                        </div>
                        <p className="mb-1">Patente: {bus.id}</p>
                        <small>
                          Metros de distancia: {bus.meters_distance}
                        </small>
                      </div>
                    );
                  })}
                </div>

                {datosMicros.length == 0 ? (
                  <div>
                    <h1>HERMANITO NO HAY MICROS QUE VAMOH A HACER</h1>
                    <img
                      src="https://i.ytimg.com/vi/qi2iKc_HtAY/sddefault.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
