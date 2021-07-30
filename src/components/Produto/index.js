import { Container } from './styles';
import { memo, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCarrinhoContext } from 'common/contexts/Carrinho';
import { UsuarioContext } from 'common/contexts/Usuario';
import abobora from 'assets/abobora.png';
import tomate from 'assets/tomate.png';
import brocolis from 'assets/brocolis.png';
import batata from 'assets/batata.png';
import pepino from 'assets/pepino.png';


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  const { carrinho, adicionarProduto, removerProduto, valorTotal } = useCarrinhoContext();
  const { saldo } = useContext(UsuarioContext);
  const itemNoCarrinho = carrinho.find(item => item.id === id);
  const fotos = [{
    nome: "abobora",
    imagem: abobora
  }, {
    nome: "tomate",
    imagem: tomate
  }, {
    nome: "brocolis",
    imagem: brocolis
  }, {
    nome: "batata",
    imagem: batata
  }, {
    nome: "pepino",
    imagem: pepino
  }];
  return (
      <Container>
        <div>
          <img
            src={fotos.find(imagem => imagem.nome === foto).imagem}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            onClick={() => removerProduto(id)}
            disabled={!itemNoCarrinho || itemNoCarrinho.quantidade === 0}
            color="secondary"
          >
            <RemoveIcon />
          </IconButton>
          {itemNoCarrinho?.quantidade || 0}
          <IconButton
            disabled={valorTotal > saldo}
            onClick={() => adicionarProduto({
              nome,
              foto,
              id,
              valor,
              unidade
            })}
            color="primary"
          >
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)