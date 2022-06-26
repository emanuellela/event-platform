import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

//Doc Object Model renderiza e mostra em tela usando tag app 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
