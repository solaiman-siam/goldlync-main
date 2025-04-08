import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ role, children }) => {
  const location = useLocation();

  //   console.log(
  //     localStorage.getItem("auth_token") &&
  //       JSON.parse(localStorage.getItem("role")) == role
  //   );
  //   console.log(role);

  if (
    localStorage.getItem("auth_token") &&
    JSON.parse(localStorage.getItem("role")) == role
  ) {
    return children;
  } else {
    // Redirect to login page if not authenticated
    toast.error(`You need to be a ${role} to access this page.`);
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
