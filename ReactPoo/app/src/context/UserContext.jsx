import { createContext, useState } from "react";

// Cria o contexto
export const UserContext = createContext();

// Provider: quem envolve toda a aplicação
export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // começa como "não logado"

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
