export const ConsultarMonedas = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  return resultado;
};
