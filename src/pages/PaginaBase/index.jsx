import { Outlet } from "react-router-dom";
// import styles from "@/PaginaBase.module.css";
import Cabecalho from "@/components/Cabecalho";
import Container from "@/components/Container";
import Rodape from "@/components/Rodape";
import FavoritosProvider from "@/contextos/Favoritos";

function PaginaBase() {
  return (
    <>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Outlet />
        </FavoritosProvider>
      </Container>
      <Rodape />
    </>
  );
}

export default PaginaBase;
