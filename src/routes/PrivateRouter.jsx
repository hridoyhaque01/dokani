import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRouter({ children }) {
  const { accessToken } = useSelector((state) => state.auth);
  const location = useLocation();
  if (accessToken) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRouter;
