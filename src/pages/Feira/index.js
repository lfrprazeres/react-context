import { Container, Header, Lista } from './styles';
import feira from './feira.json';
import Produto from './Produto';
import { useContext } from 'react';
import { UsuarioContext } from 'common/contexts/Usuario';


function Feira() {

  const { nome } = useContext(UsuarioContext);
  return (
    <Container>
      <Header>
        <h2> Olá {nome}!</h2>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
          {feira.map(produtor => (
            <Produto
              {...produtor}
              key={produtor.id}
            />
          ))}
      </Lista>
    </Container>
  )
}

export default Feira;