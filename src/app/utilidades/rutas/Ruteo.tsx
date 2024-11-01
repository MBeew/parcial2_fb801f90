import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../components/contenedor/Inicio";
import { NoEncontrado } from "../../components/contenedor/NoEncontrado";
import { Quienes } from "../../components/otros/Quienes";
import { AdministrarEquipos } from "../../components/equipos/AdministrarEquipos";
import { ListarEquipos } from "../../components/equipos/ListarEquipos";
import { RegistrarEquipos } from "../../components/equipos/RegistrarEquipos";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="*" element={<NoEncontrado />} />
      <Route path="/quien" element={<Quienes />} />
      <Route path="/admin" element={<AdministrarEquipos />} />
      <Route path="/listar" element={<ListarEquipos />} />
      <Route path="/regis" element={<RegistrarEquipos />} />
    </Routes>
  );
};
