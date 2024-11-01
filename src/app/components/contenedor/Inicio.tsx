import imageOne from "../../../assets/img/imageOne.jpeg";
import imageTwo from "../../../assets/img/imageTwo.jpg";
import imageThree from "../../../assets/img/imageThree.jpg";

export const Inicio = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-6">
          <div
            className="h-100 p-4 text-dark rounded-3"
            style={{ backgroundColor: "#003A7033" }}>
            <h2>
              <b>¡Bienvenidos!</b>
            </h2>
            <p>
              Free Star: Gestión integral de equipos tecnológicos para un
              rendimiento empresarial óptimo.
            </p>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        style={{ margin: "1.2cm" }}>
        <div className="bd-example m-0 border-0">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ textAlign: "center" }}>
              <img
                src={imageOne}
                alt="First slide"
                style={{ width: "600px", height: "400px" }}
              />
            </div>

            <div className="carousel-item" style={{ textAlign: "center" }}>
              <img
                src={imageTwo}
                alt="Second slide"
                style={{ width: "800px", height: "400px" }}
              />
            </div>

            <div className="carousel-item" style={{ textAlign: "center" }}>
              <img
                src={imageThree}
                alt="Third slide"
                style={{ width: "800px", height: "400px" }}
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ backgroundColor: "#003A7033" }}></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{ backgroundColor: "#003A7033" }}></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="pt-1 d-flex justify-content-center">
        <div className="col-md-6">
          <div
            className="h-100 p-4 rounded-3"
            style={{ backgroundColor: "#003A7033" }}>
            <h2>
              <b>Servicios</b>
            </h2>
            <p>
              <b>1. Mantenimiento de Equipos</b> Tecnológicos Ofrecemos
              servicios de mantenimiento preventivo y correctivo para asegurar
              que tus equipos funcionen sin interrupciones. Nuestro equipo de
              expertos está disponible para resolver cualquier problema técnico
              que pueda surgir.
            </p>
            <p>
              <b>2. Consultoría Tecnológica</b> Brindamos asesoría personalizada
              para ayudarte a seleccionar las mejores soluciones tecnológicas
              que se adapten a las necesidades de tu negocio. Desde la elección
              de hardware hasta la implementación de software, estamos aquí para
              guiarte.
            </p>
            <p>
              <b>3. Soporte Técnico</b> Nuestro servicio de soporte técnico está
              disponible 24/7, asegurando que siempre tengas asistencia cuando
              la necesites. Ya sea que enfrentes problemas de software o
              hardware, nuestro equipo está preparado para ayudarte.
            </p>
            <p>
              <b>4. Capacitación en Tecnología</b> Ofrecemos programas de
              capacitación para que tu personal se mantenga actualizado con las
              últimas herramientas y tecnologías. Ayudamos a tu equipo a mejorar
              sus habilidades y aumentar la eficiencia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
