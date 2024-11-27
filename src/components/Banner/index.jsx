import React from 'react'
import style from './Banner.module.scss';

const Banner = ({imagem}) => {
  return (
    <div className={style.capa} style={{backgroundImage:`url('/imagens/banner-${imagem}.png')`}}></div>
  )
}

export default Banner;