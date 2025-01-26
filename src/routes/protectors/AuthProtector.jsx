import useAuth from "@/hooks/useAuth";
import { default_auth_redirect } from "@/lib/staticData";
import { Navigate } from "react-router";

const AuthProtector = ({ children }) => {
  const { isLogged } = useAuth();

  if (isLogged) {
    return <Navigate to={default_auth_redirect} />;
  }

  return children;
};

export default AuthProtector;
