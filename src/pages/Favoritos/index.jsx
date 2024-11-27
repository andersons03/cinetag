
import style from "./Favoritos.module.scss";
import Banner from "@/components/Banner"
import Titulo from "@/components/Titulo"
import Card from "@/components/Card";
import { useFavoritoContext } from "@/contextos/Favoritos"

const Favoritos = () => {
  const {favorito} = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo><h1>Favoritos</h1></Titulo>
      <section className={style.container}>
        {favorito.map(
          card => {return <Card key={card.id} {...card} />}
        )}
      </section>
    </>
  )
}

export default Favoritos