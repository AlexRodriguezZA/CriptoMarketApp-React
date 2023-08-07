export const ConsultarMonedas = async (moneda) => {

  const url = moneda ? `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=${moneda}` :
  "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  return resultado;
};
  