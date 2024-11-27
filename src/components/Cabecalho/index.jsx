import React from 'react'
import logo from './logo.png';
import style from './Cabecalho.module.scss';
import { Link } from 'react-router-dom';
import CabecalhoLink from '@/components/CabecalhoLink';

const Cabecalho = () => {
  return (
    <header className={style.siteHeader}>
      <div className="container flex -between -align-center">
        <Link to="./">
          <img src={logo} alt="Logo do cinetag" />
        </Link>
        <nav>
          <CabecalhoLink url={"./"}>Inicio</CabecalhoLink>
          <CabecalhoLink url={"./favoritos"}>Favoritos</CabecalhoLink>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho;