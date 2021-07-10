import { Container } from './styles';
import Card from '@material-ui/core/Card';
import { memo, useContext } from 'react';
import { CarrinhoContext } from 'common/contexts/Carrinho';


function Produtor({ nome, foto, id }) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function adicionarProdutor(produtor) {
    const temProdutor = carrinho.some(listaProdutor => listaProdutor.id === produtor.id);
    if(!temProdutor) {
      setCarrinho(carrinhoAnterior => ([...carrinhoAnterior, produtor]));
    } else {
      setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(produtorNoCarrinho => produtorNoCarrinho.id !== produtor.id));
    }
  }

  return (
    <Card>
      <Container
        onClick={() => adicionarProdutor({
          nome,
          id,
          foto
        })}
      >
        <img src={foto} alt={`foto de ${nome}`} />
        <p>
          {nome}
        </p>
      </Container>
    </Card>
  )
}

export default memo(Produtor)