import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import RouterComponent from "./RouterComponent.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterComponent />
  </StrictMode>,
)
