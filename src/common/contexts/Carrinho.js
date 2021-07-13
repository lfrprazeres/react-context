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

  function adicionarProduto(novoProduto) {
    const temOProduto = carrinho.some(item => item.id === novoProduto.id);
    let novoCarrinho;
    if (!temOProduto) {
      novoCarrinho = [
        ...carrinho, 
        {
          ...novoProduto,
          quantidade: 1
        }
      ];
      return setCarrinho(novoCarrinho);
    } 
    novoCarrinho = carrinho.map(item => {
      if (item.id === novoProduto.id) {
        item.quantidade += 1;
      }
      return item
    });
    setCarrinho(novoCarrinho);
  }

  

  function removerProduto(id) {
    const produto = carrinho.find(item => item.id === id);
    const ultimo = produto.quantidade === 1;
    let novoCarrinho;
    if (ultimo) {
      novoCarrinho = carrinho.filter(item => item.id !== id);
      return setCarrinho(novoCarrinho)
    } 
    novoCarrinho = carrinho.map(item => {
      if (item.id === id) {
        item.quantidade -= 1;
      }
      return item
    });
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