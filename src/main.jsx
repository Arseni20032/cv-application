import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainBlockForm from './components/MainBlock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainBlockForm/>
  </StrictMode>
)
