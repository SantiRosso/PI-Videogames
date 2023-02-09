// import { useAuth } from "./context/authContext";
// import Loader from "./Loader/Loader";
// import { Navigate, Route } from "react-router-dom";

// export function PortectedRoute({ children }) {
//   const { user, loading } = useAuth();
//   if (user) {
//     return <Route>{children}</Route>;
//   } else if (loading) {
//     return <Loader />;
//   } else {
//     return <Navigate to="/videogames" />;
//   }
// }
