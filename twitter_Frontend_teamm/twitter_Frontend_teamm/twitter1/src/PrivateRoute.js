import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isLogged }) {
  return isLogged==='true' ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;