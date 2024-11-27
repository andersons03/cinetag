import style from "./Inicio.module.scss";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

// import cardsDb from "@/json/db.json"

const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
    .then(response => response.json())
    .then(dados => setVideos(dados))
  }, [])

  return (
    <>
      <Banner imagem="home" />
      <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
      <section className={`${style.container}`}>
        {videos.map(
          card => <Card key={card.id} id={card.id} titulo={card.titulo} imagem={card.capa} />
        )}
      </section>
    </>
  )
}

export default Inicio