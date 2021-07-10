import { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export default function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}