import {AuthContextProvider} from "@/context/AuthContext";
import { StateContextProvider } from "@/context/StateContext";
import { HelmetProvider } from "react-helmet-async";

const MainProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <StateContextProvider>
        <HelmetProvider>{children}</HelmetProvider>
      </StateContextProvider>
    </AuthContextProvider>
  );
};

export default MainProvider;
