import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { PaginaFormulario } from "./paginas/PaginaFormulario";
import { PaginaListado } from "./paginas/PaginaListado";
import { PaginaNotFound } from "./paginas/PaginaNotFound";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";

function App() {
  return (
    <>
      <Router>
        <Cabecera />
        <Switch>
          <Route path="/principal" exact>
            <PaginaPrincipal />
          </Route>
          <Route path="/facturas" exact>
            <PaginaListado />
          </Route>
          <Route path="/nueva-factura" exact>
            <PaginaFormulario />
          </Route>
          <Route path="/editar-factura/:idFactura" exact>
            <PaginaFormulario />
          </Route>
          <Route path="/" exact>
            <Redirect to="/principal" />
          </Route>
          <Route path="**" exact>
            <PaginaNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
