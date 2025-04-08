import { createContext, useState } from "react";

const StateContext = createContext(null);

const StateContextProvider = ({ children }) => {
  const [questionnariesData, setQuestionnariesData] = useState();

  return (
    <StateContext.Provider
      value={{ questionnariesData, setQuestionnariesData }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContextProvider, StateContext };
