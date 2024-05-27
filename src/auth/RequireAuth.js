import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  // This bit of code here makes sure a user is logged in and send them to the page requested
  return auth?.username ? (
    <Outlet />
  ) : (
    // If they aren't logged in they will be sent to the login page
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
