import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'pages/Login';
import Produtores from 'pages/Produtores';
import { useState } from 'react';

export default function Routes() {
  const [nome, setNome] = useState('');
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login nome={nome} setNome={setNome} />
        </Route>
        <Route path="/produtores">
            <Produtores nome={nome} />
        </Route>
      </Switch>
    </Router>
  )
};