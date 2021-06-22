import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <header className="cabecera">
      <h1>Rutas</h1>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/principal" activeClassName="actual">
              Principal
            </NavLink>
          </li>
          <li>
            <NavLink to="/facturas" activeClassName="actual">
              Facturas
            </NavLink>
          </li>
          <li>
            <NavLink to="/nueva-factura" activeClassName="actual">
              Nueva factura
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
