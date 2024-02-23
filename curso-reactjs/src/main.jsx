import React from 'react'
import ReactDOM from 'react-dom/client'
import { Props } from './Props'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Props titulo="Hola Mundo" subtitulo={12124}/>
  </React.StrictMode>,
)
