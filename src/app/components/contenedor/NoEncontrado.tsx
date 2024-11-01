export const NoEncontrado = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-6">
          <div
            className="h-100 p-4 text-dark rounded-3"
            style={{ backgroundColor: "#003A7033" }}>
            <h2>
              <b>Error</b>
            </h2>
            <p>
              No hemos podido encontrar el elemento que estás buscando. Verifica
              que los datos ingresados sean correctos o intenta con otro término
              de búsqueda. Si el problema persiste, contáctate con nuestro
              soporte para recibir ayuda personalizada.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
