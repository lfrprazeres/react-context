import { createContext, useContext, useEffect, useState } from 'react';

export default function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);
  
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeCarrinho,
        setQuantidadeCarrinho
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export const CarrinhoContext = createContext();

export function useCarrinhoContext() {
  const {
    carrinho,
    setCarrinho,
    quantidadeCarrinho,
    setQuantidadeCarrinho
} = useContext(CarrinhoContext);

  const mudarQuantidade = (id, quantidade) => carrinho.map(item => {
    if (item.id === id) item.quantidade += quantidade;
    return item;
  });

  function adicionarProduto(novoProduto) {
    const temOProduto = carrinho.some(item => item.id === novoProduto.id);
    let novoCarrinho = [...carrinho];
    if (!temOProduto) {
      novoProduto.quantidade = 1;
      novoCarrinho.push(novoProduto);
      return setCarrinho(novoCarrinho);
    } 
    novoCarrinho = mudarQuantidade(novoProduto.id, 1);
    setCarrinho(novoCarrinho);
  };

  function removerProduto(id) {
    const produto = carrinho.find(item => item.id === id);
    const ultimo = produto.quantidade === 1;
    let novoCarrinho;
    if (ultimo) {
      novoCarrinho = carrinho.filter(item => item.id !== id);
      return setCarrinho(novoCarrinho);
    } 
    novoCarrinho = mudarQuantidade(id, -1);
    setCarrinho(novoCarrinho);
  }

  useEffect(() => {
    let novaQuantidade = carrinho.reduce((contador, novoItem) => contador + novoItem.quantidade, 0)
    setQuantidadeCarrinho(novaQuantidade);
  },[carrinho, setQuantidadeCarrinho])

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    quantidadeCarrinho
  }
}