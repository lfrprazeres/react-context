import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'pages/Login';
import Produtores from 'pages/Produtores';
import UsuarioProvider from 'common/contexts/Usuario';
import CarrinhoProvider from 'common/contexts/Carrinho';
import NavBar from 'pages/Produtores/NavBar';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
              <Login />
          </Route>
          <Route path="/produtores">
            <CarrinhoProvider>
              <NavBar />
              <Produtores />
            </CarrinhoProvider>
          </Route>
        </UsuarioProvider>
      </Switch>
    </Router>
  )
};