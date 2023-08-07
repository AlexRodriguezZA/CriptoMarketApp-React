export const cotizarCripto = async (cripto, moneda) => {
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${cripto}&tsyms=${moneda}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado;
  };
