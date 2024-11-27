import { TestandoContext } from '@/contextos/TestandoContext'
import React, { useContext } from 'react'

const ChildElement = () => {
  const color = useContext(TestandoContext);
  // console.log(color);
  
  return (
    <h1 style={{color:color}}>ChildElement</h1>
  )
}

export default ChildElement