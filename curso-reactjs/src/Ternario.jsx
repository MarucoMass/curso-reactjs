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
    return (
        <>
            <h1>Ternario</h1>
            <ol>
                <Items nombre='Props' visto={true} />
                <Items nombre='Eventos' visto={true} />
                <Items nombre='Redux' visto={false} />
            </ol>
        </>
    )
}
