import { TestandoContext } from '@/contextos/TestandoContext'
import ChildElement from '@/components/ChildElement'
import ParentElement from '@/components/ParentElement'
import React from 'react'

const Teste = () => {
  const color = "green";

  return (
    <>
    <TestandoContext.Provider value={color}>
      <ParentElement>
        <ChildElement />
      </ParentElement>
    </TestandoContext.Provider>
    </>
  )
}

export default Teste