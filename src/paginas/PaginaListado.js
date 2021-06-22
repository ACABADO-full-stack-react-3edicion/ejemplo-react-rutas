import { useState } from "react";
import { useHistory } from "react-router-dom";

export const PaginaListado = () => {
  const history = useHistory();
  const [facturas, setFacturas] = useState([
    { id: 1, numero: "1000" },
    { id: 2, numero: "1001" },
  ]);
  const editaFactura = (id) => {
    history.push(`/editar-factura/${id}`);
  };
  return (
    <>
      <h2>Listado de facturas</h2>
      <ul>
        {facturas.map((factura) => (
          <li key={factura.id} onClick={() => editaFactura(factura.id)}>
            {factura.numero}
          </li>
        ))}
      </ul>
    </>
  );
};
