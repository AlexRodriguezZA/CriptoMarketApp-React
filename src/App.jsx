import './App.css'

import Header from './components/Header'
import Formulario from './components/Formulario'
import Data from './components/Data'
import { useState,useEffect } from 'react'


function App() {

  const [CotizacionMoneda, setCotizacionMoneda] = useState({})
  const [dataCotizacion , setdataCotizacion] = useState()
  const [Criptoinfo, setCriptoinfo] = useState()
  const [NombreCripto, setNombreCripto] = useState("")

  useEffect(() => {
    if (Object.keys(CotizacionMoneda).length>0) { //VERIFICAMOS QUE HAYA DATOS EN EL OBJETO QUE TRAEMOS EN EL FORMULARIO
      const {moneda, cripto} = CotizacionMoneda; //Destructuramos el objeto
      setNombreCripto(cripto)


//////////////////////////////////////////////////////////////////////////////
      const cotizarCripto = async () =>{
        const url = `https://min-api.cryptocompare.com/data/price?fsym=${cripto}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setdataCotizacion(resultado);

      }
      
      cotizarCripto()



////////////////////////////////////////////////////////////////7    
      const consultarAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
        const respuesta = await fetch(url)
        const resultado = await respuesta.json();

        resultado.Data.filter(criptomoneda => {
          if(criptomoneda.CoinInfo.Name === cripto){
            setCriptoinfo(criptomoneda.DISPLAY.USD)
          }
            
        })
      }

      consultarAPI()
  
    }
    
  }, [CotizacionMoneda])




  return (
    <div className="container">
      
     <Header/>
     <div className='data-container'>
      <Formulario  setCotizacionMoneda={setCotizacionMoneda}/>


      {dataCotizacion && <Data 
                          dataCotizacion={dataCotizacion} 
                          Criptoinfo={Criptoinfo} 
                          NombreCripto={NombreCripto}/>}
     </div>
     

    </div>
  )
}

export default App
