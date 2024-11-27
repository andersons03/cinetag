import { TestandoContext } from '@/contextos/TestandoContext'
import React from 'react'

const ParentElement = ({color, children}) => {
  return (
    <div>
      <TestandoContext.Provider value={color}>
        {children}
      </TestandoContext.Provider>
    </div>
  )
}

export default ParentElement