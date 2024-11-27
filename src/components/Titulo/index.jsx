import React from 'react'
import style from './Titulo.module.scss';

const Titulo = ({children}) => {
  return (
    <div className={style.titulo}>
      {children}
    </div>
  )
}

export default Titulo;