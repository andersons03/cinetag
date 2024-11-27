import React from 'react'
import { Link } from 'react-router-dom'
import style from './CabecalhoLink.module.scss';

const CabecalhoLink = ({children, url}) => {
  return (
    <Link to={url} className={style.link}>
      {children}
    </Link>
  )
}

export default CabecalhoLink