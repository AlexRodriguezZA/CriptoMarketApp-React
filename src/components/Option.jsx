const Option = ({criptomoneda}) => {
  return (
    <option value={criptomoneda.id}>
      {criptomoneda.nombre}
    </option>
  )
}

export default Option