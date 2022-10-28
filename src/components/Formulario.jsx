import React from 'react'
import "./Styles/Formulario.css"
import { useEffect, useState } from 'react'
import  { v4 as uuidv4 } from 'uuid';
import Error from './Error';


const Formulario = ({setCotizacionMoneda}) => {

const [CriptoMonedas, setCriptoMonedas] = useState([])  //Nos permite cargar los select de las criptomonedas

const [Moneda, setMoneda] = useState("")
const [Cripto, setCripto] = useState("")
const [error, seterror] = useState(false)

useEffect(() => {
  const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url)
      const resultado = await respuesta.json();

      const arrayCriptomonedas = resultado.Data.map(criptomoneda => {
          const objetoCrearCripto = {
              id: criptomoneda.CoinInfo.Name,
              nombre: criptomoneda.CoinInfo.FullName
          }
          return objetoCrearCripto;
      })

      setCriptoMonedas(arrayCriptomonedas);
  }
  consultarAPI();
}, [])
 




const handleSubmit = e => {
  e.preventDefault()
  console.log("Enviando form")

  if(Moneda.trim() === '' || Cripto.trim() === '') {
    seterror(true)
    return
}

    seterror(false)

  

  const objetoCotizacion = {
    moneda: Moneda,
    cripto: Cripto
  }
  setCotizacionMoneda(objetoCotizacion)
}

//Manejadores de LOS SELECTS
const handleCripto =(e)=>{
  const cripto = e.target.value;
  setCripto(cripto)
}

const handleMoneda =(e)=>{
  const moneda = e.target.value;
  setMoneda(moneda)
}


  
  return (
    <div className='Formulario-container'>
      
      <h2 className='formulario-titulo'>Busca tu cripto-moneda</h2>
      { error && <Error/>}
        <form className='formulario' onSubmit={handleSubmit} action="">
          
          <div className='select-moneda'>
            <select className='select-modena-convetir'  onChange={handleMoneda}>
              <option value="" selected={true} disabled="disabled">Moneda</option>
              <option value="ARS">ARS</option>
              <option value="USD">USD</option>
            </select>

            <select className='select-modena-cripto' onChange={handleCripto}>
              <option value="" selected={true}  disabled="disabled">Criptomoneda</option>
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
              <option value="USDT">Tether</option>
              <option value="BNB">Binance Coin</option>
              <option value="XRP">XRP</option>
              <option value="USDC">USD Coin</option>
              <option value="BUSD">BUSD</option>
              <option value="SOL">Solana</option>
              <option value="ADA">Cardano</option>
              <option value="DOGE">DOGE</option>
              <option value="MATIC">Polygon</option>
              <option value="APT">Aptos</option>
              <option value="DOT">Polkadot</option>
              <option value="FTT">FTX Token</option>
              <option value="AVAX">Avalanche</option>
              <option value="LINK">Chainlink</option>
              <option value="SHIB">Shiba Inu</option>
              <option value="QNT">Quant</option>
              <option value="TRX">TRON</option>


              {
                //SEGUNDA FORMA PERO ME SALTAN ERRORES :|p
                //CriptoMonedas.map( criptomoneda => <option key={uuidv4()} value={criptomoneda.id}>{criptomoneda.nombre}</option>) 
              }
            </select>
          </div>

          <input className='button-submit' type="submit" value="Consultar" />
        </form>
    </div>

  )
}

export default Formulario