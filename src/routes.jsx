import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "@/pages/Inicio";
import Favoritos from "@/pages/Favoritos";
import Teste from "@/pages/Teste";
import Player from "@/pages/Player";
import NaoEncontrada from "@/pages/NaoEncontrada";
import PaginaBase from "@/pages/PaginaBase";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
          <Route path="/:idVideo" element={<Player />}></Route>
          <Route path="/teste" element={<Teste />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes