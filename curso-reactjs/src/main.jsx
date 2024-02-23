import React from 'react'
import ReactDOM from 'react-dom/client'
import { Props } from './Props'
import { Eventos } from './Eventos'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Props titulo="Props" subtitulo={12124}/>
  <Eventos />
  </React.StrictMode>,
)
