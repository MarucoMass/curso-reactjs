import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Props } from './Props'
import { Eventos } from './Eventos'
import { UseState } from './UseState'
import { Ternario } from './Ternario'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Props titulo="Props" subtitulo={12124}/>
  <Eventos />
  <UseState value={0}/>
  <Ternario />
  </React.StrictMode>,
)
