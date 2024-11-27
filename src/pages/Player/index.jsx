import style from './Player.module.scss'
import Banner from "@/components/Banner"
import Titulo from "@/components/Titulo"
import NaoEncontrada from '@/pages/NaoEncontrada'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const Player = () => {
  const parametros = useParams();  

  const [video, setVideos] = useState([]);
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.idVideo}`)
    .then(response => response.json())
    .then(dados => setVideos(...dados))
  }, [])


  if (!video) {
    return (<NaoEncontrada/>)
  }
  
  return(
    <>
      <Banner imagem="player" />
      <Titulo><h1>{video.titulo}</h1></Titulo>
      <section className="container">
        <iframe 
          width="100%" 
          height="100%" 
          src={video.link} 
          title={video.titulo} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        ></iframe>
      </section>
    </>
  )
}

export default Player