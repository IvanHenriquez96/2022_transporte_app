

export const FormBuscarParadero = ({ setCodigo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCodigo(e.target.codigoParadero.value);
  };

  return (
    <div className="mt-5">
      <div className="col-xl-12 col-lg-12">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {'<IHENRIQUEZ/>'} - ¿Donde viene la micro?
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control form-control-user mb-3"
                name="codigoParadero"
                id="inputParadero"
                placeholder="Ingrese código del paradero"
              />

              <div className="d-grid gap-2">
								
                <button type="submit" className="btn btn-primary btn-user btn-block mb-3">
                  Ver Datos Paradero
                </button>
              </div>
            </form>
						
          </div>
        </div>
      </div>
    </div>
  );
};
