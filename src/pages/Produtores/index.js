import { Container, Header, Lista } from './styles';
import produtores from './produtores.json';
import Produtor from './Produtor';
import { useContext } from 'react';
import { UsuarioContext } from 'common/contexts/Usuario';


function Produtores() {

  const { nome } = useContext(UsuarioContext);
  return (
    <Container>
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
              {...produtor}
              key={produtor.id}
            />
          ))}
      </Lista>
    </Container>
  )
}

export default Produtores;