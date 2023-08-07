//Componentes
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";
import ImagenCoin from "../src/assets/Bitcoin.svg";
import SidebarHistory from "./components/SidebarHistory";


//Funciones
import { ConsultarMonedas } from "./utils/CriptomonedasFetch";
import { cotizarCripto } from "./utils/fetchCotizador";
import Data from "./components/Data";
import { useLocalStorage } from "./context/LocalStorage";
import { CrearObjetoHistorial } from "./utils/CrearObjetoHistorial";

function App() {
  const [CotizacionMoneda, setCotizacionMoneda] = useState({});
  const [dataCotizacion, setdataCotizacion] = useState();
  const [Criptoinfo, setCriptoinfo] = useState();
  const [NombreCripto, setNombreCripto] = useState("");
  const { addToHistory, getHistory } = useLocalStorage();


  useEffect(() => {
    if (Object.keys(CotizacionMoneda).length > 0) {
      //VERIFICAMOS QUE HAYA DATOS EN EL OBJETO QUE TRAEMOS EN EL FORMULARIO
      const { moneda, cripto } = CotizacionMoneda; //Destructuramos el objeto
      setNombreCripto(cripto);
      //Guardamos el historial en el local storage
      const HistorialItem = CrearObjetoHistorial(cripto, moneda)
      addToHistory(HistorialItem)
      //////////////////////////////////////////////////////////////////////////////
      const Cotizador = async () => {
        const resultado = await cotizarCripto(cripto, moneda);
        setdataCotizacion(resultado);
      };

      Cotizador();

      ////////////////////////////////////////////////////////////////7
      const consultarAPI = async () => {
        const resultado = await ConsultarMonedas(moneda);
        resultado.Data.filter((criptomoneda) => {
          if (criptomoneda.CoinInfo.Name === cripto) {
            setCriptoinfo(criptomoneda.DISPLAY);
          }
        });
      };

      consultarAPI();
    }
  }, [CotizacionMoneda]);

  return (
    <div className="w-full flex flex-col h-screen justify-center items-center">
      <SidebarHistory/>
      <Header />
      <div className="flex flex-col items-center">
        <Formulario setCotizacionMoneda={setCotizacionMoneda} />

        {dataCotizacion ? (
          <Data
            dataCotizacion={dataCotizacion}
            Criptoinfo={Criptoinfo}
            NombreCripto={NombreCripto}
          />
        ) : (
          <div className="mt-20 w-full flex justify-center">
            <img className="w-4/5" src={ImagenCoin} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
