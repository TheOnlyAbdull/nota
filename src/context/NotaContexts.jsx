import { createContext, useState } from "react";


export const NotaContext = createContext();

function NotaProvider({ children }) {
  const [firstName, setFirstName] = useState("Guest");
  const [lastName, setLastName] = useState("User");



  return (
    <NotaContext.Provider
      value={{ firstName, setFirstName, lastName, setLastName }}
    >
      {children}
    </NotaContext.Provider>
  );
}

export default NotaProvider;
