import style from './Card.module.scss';
import React from 'react'
import favorite from './favorite.png';
import favorite_outline from './favorite_outline.png';
import { useFavoritoContext } from '@/contextos/Favoritos';
import { Link } from 'react-router-dom';

const Card = ({id, imagem, titulo}) => {
  const {favorito, adicionarFavorito} = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id == id);
  const icone = (ehFavorito) ? favorite : favorite_outline;
  // console.log(favorito);
  
  return (
    <div className={style.card}>
      <img src={imagem} alt={titulo} className={style.card__img} />
      <div className={style.card__content}>
        <h2 className={style.card__title}>
          <Link to={`${id}`} className={style.link}>
            {titulo}
          </Link>
        </h2>
        <img 
          src={icone} 
          alt="Adicionar a favorito" 
          className={style.card__favorite} 
          onClick={() => {
            adicionarFavorito({id, imagem, titulo})
          }}
        />
      </div>
    </div>
  )
}

export default Card;