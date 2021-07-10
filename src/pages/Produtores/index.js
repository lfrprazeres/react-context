import { Container, Header, Lista } from './styles';
import NavBar from './NavBar';
import produtores from './produtores.json';
import Produtor from './Produtor';
import { useState } from 'react';


export default function Produtores({ nome }) {
  const [cart, setCart] = useState([]);
  return (
    <Container>
      <NavBar />
      <Header>
        <h2> Olá {nome}!</h2>
        <p>Encontre os melhores produtores</p>
      </Header>
      <Lista>
        <h2>
          Produtores:
        </h2>
        {produtores.map(produtor => (
          <Produtor
            nome={produtor.nome}
            foto={produtor.foto}
            key={produtor.id}
          />
        ))}
      </Lista>
    </Container>
  )
}
