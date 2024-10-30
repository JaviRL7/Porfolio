import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Importa aquí tu archivo Tailwind CSS
import './i18next'; // Importa la configuración de i18next

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)