import React from "react";
import { useEffect, useState } from "react";
import Error from "./Error";
import Option from "./Option";

import { ConsultarMonedas } from "../utils/CriptomonedasFetch";

const Formulario = ({ setCotizacionMoneda }) => {
  const [CriptoMonedas, setCriptoMonedas] = useState([]); //Nos permite cargar los select de las criptomonedas
  const [Moneda, setMoneda] = useState("");
  const [Cripto, setCripto] = useState("");
  const [error, seterror] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      const resultado = await ConsultarMonedas();

      const arrayCriptomonedas = resultado.Data.map((criptomoneda) => {
        const objetoCrearCripto = {
          id: criptomoneda.CoinInfo.Name,
          nombre: criptomoneda.CoinInfo.FullName,
        };
        return objetoCrearCripto;
      });

      setCriptoMonedas(arrayCriptomonedas);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando form");

    if (Moneda.trim() === "" || Cripto.trim() === "") {
      seterror(true);
      return;
    }

    seterror(false);

    const objetoCotizacion = {
      moneda: Moneda,
      cripto: Cripto,
    };
    setCotizacionMoneda(objetoCotizacion);
  };

  //Manejadores de LOS SELECTS
  const handleCripto = (e) => {
    const cripto = e.target.value;
    setCripto(cripto);
  };

  const handleMoneda = (e) => {
    const moneda = e.target.value;
    setMoneda(moneda);
  };

  return (
    <>
      {error && <Error />}
      <form className="flex flex-col gap-2 md:flex md:flex-row md:gap-4 mt-10" onSubmit={handleSubmit} action="">
        <div className="flex gap-4">
          <select className="bg-slate-300 px-1 py-1 md:px-3 md:py-1 rounded-md" onChange={handleMoneda}>
            <option value="" selected={true} disabled="disabled">
              MONEDA
            </option>
            <option value="ARS">ARS</option>
            <option value="USD">USD</option>
          </select>

          <select className="bg-slate-300 px-3 py-1 rounded-md" onChange={handleCripto}>
            <option selected={true} disabled>
              CRIPTOMONEDA
            </option>
            {CriptoMonedas.map((criptomoneda) => (
              <Option key={criptomoneda.id} criptomoneda={criptomoneda}/>
            ))}
          </select>
        </div>

        <input
          className="w-30 bg-gradient-to-r from-orange-300 to-yellow-500 px-3 py-1 hover:cursor-pointer rounded-md"
          type="submit"
          value="Consultar"
        />
      </form>
    </>
  );
};

export default Formulario;
