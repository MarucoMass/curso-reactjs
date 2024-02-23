import { useState } from "react"

/* eslint-disable react/prop-types */
const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto ? '✅' : '⛔'}
            {visto && '❤'}
        </li>
    )
}

export const Ternario = () => {

    const addTask = () => {
        setArreglo([...arreglo, { nombre: `tarea nueva ${arreglo.length+1}`, visto: true }])
    }

    let listadoSecciones = [
        { nombre: 'Props', visto: true },
        { nombre: 'Eventos', visto: true },
        { nombre: 'useState', visto: true },
        { nombre: 'Ternario', visto: true },
        { nombre: 'Redux', visto: false },
        { nombre: 'useContext', visto: false },
    ]

    const [arreglo, setArreglo] = useState(listadoSecciones)

    return (
        <>
            <h1>Ternario</h1>
            <ol>
                <Items nombre='Props' visto={true} />
                <Items nombre='Eventos' visto={true} />
                <Items nombre='Redux' visto={false} />
            </ol>
            <h1>Map</h1>
            <ol>
                {
                    arreglo.map((item, index) =>
                        <Items key={index} nombre={item.nombre} visto={item.visto} />
                        )
                }
            </ol>
            <button onClick={addTask}>Agregar tarea</button>
        </>
    )
}
