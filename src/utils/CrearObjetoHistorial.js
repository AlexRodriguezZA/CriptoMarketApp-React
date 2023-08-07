function FormatearFecha() {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear().toString().slice(-2);

  return `${day}/${month}/${year}`;
}

export const CrearObjetoHistorial = (cripto, moneda) => {
  const HistorialItem = {
    moneda: moneda,
    criptomoneda: cripto,
    fecha: FormatearFecha(),
  };

  return HistorialItem;
};
