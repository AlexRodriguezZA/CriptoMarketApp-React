import React from 'react'
import { BsFillExclamationCircleFill } from "react-icons/bs";
import "./Styles/Error.css"

const Error = () => {
  return (
    <div className='error-container'>
        <BsFillExclamationCircleFill />
        Cargue todos los datos por favor
    </div>
  )
}

export default Error