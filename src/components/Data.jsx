import wave from "../assets/wave.svg";

const Data = ({ dataCotizacion, Criptoinfo, NombreCripto }) => {
  //Con esto validamos el tipo de moneda la cual es seleccionada por el usuario en el formulario
  console.log(Criptoinfo)
  const validadorMoneda = Object.keys(Criptoinfo);
  return (
    <div className="md:mt-5 w-80 shadow-2xl border-2 flex flex-col items-center rounded-xl bg-white md:w-96 ">
      <section className="mt-5 w-full flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">{NombreCripto}</h2>
        {validadorMoneda[0] === "ARS" ? (
          <p className="mt-2 text-slate-800">🇦🇷 ARS ~ ${dataCotizacion.ARS}</p>
        ) : (
          <p className="mt-2">🇺🇸 USD ~ ${dataCotizacion.USD}</p>
        )}
      </section>
      <img className="w-full" src={wave} alt="" />

      {validadorMoneda[0] === "ARS" ? (
        <section className="w-full rounded-b-xl bg-blue-700 flex flex-col items-center gap-10">
          <p className="text-lg text-white">
            Cotización hoy:{" "}
            <span className="text-green-400 ml-1">{Criptoinfo.ARS.PRICE}</span>
          </p>
          <p className="text-lg text-white">
            Precio más alto:{" "}
            <span className="text-green-400 ml-1">
              {Criptoinfo.ARS.HIGHDAY}{" "}
            </span>
          </p>
          <p className="text-lg text-white">
            Precio más bajo:{" "}
            <span className="text-green-400 ml-1">{Criptoinfo.ARS.LOWDAY}</span>{" "}
          </p>
          <p className="text-lg text-white mb-3">
            Variación últimas 24hrs:{" "}
            <span
              className={` ${
                Criptoinfo.ARS.CHANGE24HOUR.includes("-")
                  ? "text-red-700"
                  : "text-green-400"
              } ml-1`}
            >
              {Criptoinfo.ARS.CHANGE24HOUR}
            </span>{" "}
          </p>
        </section>
      ) : (
        <section className="w-full rounded-b-xl bg-blue-700 flex flex-col items-center gap-10">
          <p className="text-lg text-white">
            Cotización hoy:{" "}
            <span className="text-green-400 ml-1">{Criptoinfo.USD.PRICE} </span>
          </p>
          <p className="text-lg text-white">
            Precio más alto:{" "}
            <span className="text-green-400 ml-1">
              {Criptoinfo.USD.HIGHDAY}{" "}
            </span>
          </p>
          <p className="text-lg text-white">
            Precio más bajo:{" "}
            <span className="text-green-400 ml-1">{Criptoinfo.USD.LOWDAY}</span>{" "}
          </p>
          <p className="text-lg text-white mb-3">
            Variación últimas 24hrs:{" "}
            <span
              className={` ${
                Criptoinfo.USD.CHANGE24HOUR.includes("-")
                  ? "text-red-700"
                  : "text-green-400"
              } ml-1`}
            >
              {Criptoinfo.USD.CHANGE24HOUR}
            </span>{" "}
          </p>
        </section>  
      )}
    </div>
  );
};

export default Data;
