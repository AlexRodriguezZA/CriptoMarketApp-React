import React from 'react'
import eeuu from "../assets/banderas/estados-unidos.png"
import arg from "../assets/banderas/argentina.png"

import "./Styles/Data.css"

const Data = ({dataCotizacion,Criptoinfo,NombreCripto}) => {
  
  //Con esto validamos el tipo de moneda la cual es seleccionada por el usuario en el formulario

  const validadorMoneda = Object.keys(dataCotizacion)
  
  return (
    <div className='card-container'>
        <h2 className='Nombre-cripto'>{NombreCripto}</h2>
        <section className='detalles-container'>
            
            <p>Cotización hoy: {Criptoinfo.PRICE} </p>
            <p>Precio más alto: {Criptoinfo.HIGHDAY} </p>
            <p>Precio más bajo: {Criptoinfo.LOWDAY} </p>
            <p>Variación últimas 24hrs: {Criptoinfo.CHANGE24HOUR} </p>

          
            { validadorMoneda[0] === "ARS" ? <p>Precio en ARS <img src={arg} alt="" /> ${dataCotizacion.ARS}</p> 
            : <p>Precio en USD <img src={eeuu} alt="" /> ${dataCotizacion.USD}</p>}


        </section>

    </div>
  )
}

export default Data