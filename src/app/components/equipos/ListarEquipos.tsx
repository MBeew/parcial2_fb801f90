import imageCardOne from "../../../assets/img/imageCardOne.avif";
import imageCardTwo from "../../../assets/img/imageCardTwo.webp";
import imageCardThree from "../../../assets/img/imageCardThree.webp";

export const ListarEquipos = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-6">
          <div
            className="h-100 p-4 text-dark rounded-3"
            style={{ backgroundColor: "#003A7033" }}>
            <h2>
              <b>Mis Equipos</b>
            </h2>
            <p>
              Consulta el listado completo de tus equipos registrados en Free
              Star y accede a la información clave de cada dispositivo en un
              solo lugar. Desde aquí podrás ver el estado actual, la ubicación,
              el historial de mantenimiento y los detalles técnicos de cada
              equipo. Además, la plataforma te permite filtrar y ordenar los
              dispositivos para agilizar la gestión, asegurando que siempre
              tengas el control y visibilidad sobre cada activo tecnológico de
              tu organización.
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center flex-wrap pt-4">
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={imageCardOne}
            alt="First slide"
            style={{ width: "100%", height: "180px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Equipo N.º 1</h5>
            <ul className="card-text">
              <li>Nombre del equipo: Laptop HP</li>
              <li>Tipo de equipo: Computadora portátil</li>
              <li>Modelo: HP Spectre x360</li>
              <li>Estado actual: En funcionamiento</li>
              <li>Ubicación: Oficina central, piso 3</li>
              <li>Responsable: Juan Pérez</li>
            </ul>
          </div>
        </div>

        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={imageCardTwo}
            alt="First slide"
            style={{ width: "100%", height: "180px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Equipo N.º 2</h5>
            <ul className="card-text">
              <li>Nombre del equipo: Impresora láser</li>
              <li>Tipo de equipo: Impresora</li>
              <li>Modelo: Brother HL-L2360DW</li>
              <li>Estado actual: En reparación</li>
              <li>Ubicación: Almacén</li>
              <li>Última fecha de mantenimiento: 15/05/2024</li>
            </ul>
          </div>
        </div>

        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={imageCardThree}
            alt="First slide"
            style={{ width: "100%", height: "180px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Equipo N.º 3</h5>
            <ul className="card-text">
              <li>Nombre del equipo: Teléfono IP</li>
              <li>Tipo de equipo: Teléfono</li>
              <li>Modelo: Cisco IP Phone 8811</li>
              <li>Estado actual: En funcionamiento</li>
              <li>Ubicación: Sala de reuniones</li>
              <li>Sistema operativo: Cisco IOS</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
