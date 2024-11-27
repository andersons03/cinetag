import Inicio from './pages/Inicio'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes'
import './reset.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
