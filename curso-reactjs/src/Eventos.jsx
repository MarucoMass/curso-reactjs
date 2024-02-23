

export const Eventos = () => {
    const handleClick = (event) => {
        console.log(event)
    }
    const handleClickDos = (event, arg) => {
        console.log(event, arg)
    }

    return (
        <>
            <h1>Eventos</h1>
            <button onClick={handleClick}>Solo hay 1 argumento</button>
            <button onClick={(event) => handleClickDos(event, "otro arg")}>Hay 2 argumentos</button>
        </>
    )
}
