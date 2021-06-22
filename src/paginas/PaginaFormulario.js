import { useState } from "react";
import { useParams } from "react-router-dom";

export const PaginaFormulario = () => {
  const { idFactura } = useParams();
  const accion = idFactura ? "editar" : "crear";
  const [numero, setNumero] = useState(idFactura ? "1000" : "");
  return (
    <>
      <h2>Formulario para {accion} factura</h2>
      <form noValidate>
        <label htmlFor="numero">Número:</label>
        <input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </form>
    </>
  );
};
