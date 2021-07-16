import { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export default function UsuarioProvider({ children }) {
  const [nome, setNome] = useState('');
  const [saldo, setSaldo] = useState();

  return (
    <UsuarioContext.Provider
      value={{
        nome,
        setNome,
        saldo,
        setSaldo
      }}
    >
      {children}
    </UsuarioContext.Provider>
  )
}