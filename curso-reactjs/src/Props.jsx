import PropTypes from 'prop-types';
export const Props = ({ titulo, subtitulo }) => {
  return (
    <>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
    </>
  )
}

Props.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.number.isRequired
}

Props.defaultProps = {
    titulo: "imimimisdfsd",
    subtitulo: 12345667
}