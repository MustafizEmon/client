import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './styles/main.css';
//import './styles/auth.css';
//import './styles/animations.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
