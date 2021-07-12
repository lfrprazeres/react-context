import { Container } from './styles';
import { memo, useContext } from 'react';
import { CarrinhoContext } from 'common/contexts/Carrinho';


function Produto({ nome, foto, id }) {
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
      <Container
        onClick={() => adicionarProdutor({
          nome,
          id,
          foto
        })}
      >
        <img
          src={foto}
          alt={`foto de ${nome}`}
        />
        <p>
          {nome}
        </p>
      </Container>
  )
}

export default memo(Produto)