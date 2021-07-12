import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'pages/Login';
import Feira from 'pages/Feira';
import UsuarioProvider from 'common/contexts/Usuario';
import CarrinhoProvider from 'common/contexts/Carrinho';
import NavBar from 'pages/Feira/NavBar';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
            <CarrinhoProvider>
              <Route path="/feira">
                  <NavBar />
                  <Feira />
              </Route>
            </CarrinhoProvider>
        </UsuarioProvider>
      </Switch>
    </Router>
  )
};