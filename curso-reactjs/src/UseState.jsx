import { useState } from "react"
import PropTypes from "prop-types"

export const UseState = ({ value }) => {

    const [contador, setContador] = useState(value)

    const handleClick = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <h1>UseState</h1>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Sumar llamado directamente al metodo</button>
            <button onClick={handleClick}>Sumar llamado a la funcion</button>
        </>
    )
}


UseState.propTypes = {
    value: PropTypes.number.isRequired
}