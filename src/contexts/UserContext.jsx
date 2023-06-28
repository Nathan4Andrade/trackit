/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : undefined
  );

  useEffect(() => {
    // Verifica se há um usuário logado no Local Storage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const persistUser = (userData) => {
    // Armazena o usuário no Local Storage
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser, persistUser }}>
      {children}
    </UserContext.Provider>
  );
};
