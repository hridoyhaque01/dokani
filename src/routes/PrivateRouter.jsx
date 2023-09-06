import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRouter({ children }) {
  const { email } = useSelector((state) => state.auth);
  const location = useLocation();
  if (email) {
    return <>{children}</>; // Wrap children in JSX syntax
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRouter;
