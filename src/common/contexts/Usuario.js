import { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export default function UsuarioProvider({ children }) {
  const [nome, setNome] = useState('');

  return (
    <UsuarioContext.Provider
      value={{
        nome,
        setNome
      }}
    >
      {children}
    </UsuarioContext.Provider>
  )
}