import { useAuth } from "./context/authContext";
import Loader from "./Loader/Loader";
import { Redirect } from "react-router";
// import { Navigate } from "react-router-dom";

export function PortectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (user) {
    return <>{children}</>;
  } else if (loading) {
    return <Loader />;
  } else {
    return <Redirect to="/videogames" />;
    // return <Navigate to="/videogames" />;
  }
}
