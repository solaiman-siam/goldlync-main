import { createContext } from "react";

const StateContext = createContext(null);

const StateContextProvider = ({ children }) => {
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
};

export { StateContextProvider, StateContext };
