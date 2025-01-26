import useCookie from "@/hooks/useCookie";
import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData, clearUserData] = useLocalStorage(
    "user-data",
    ""
  );
  const [accessToken, setAccessToken, clearAccessToken] = useCookie(
    "access-token",
    ""
  );
  const [chooseRole, setChooseRole, clearChooseRole] = useLocalStorage(
    "role",
    ""
  );
  const isLogged = false;

  const register = async () => {};

  const login = async () => {};

  const logout = async () => {
    clearAccessToken();
    clearUserData();
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        chooseRole,
        setChooseRole,
        clearChooseRole,
        register,
        login,
        logout,
        userData,
        setUserData,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
