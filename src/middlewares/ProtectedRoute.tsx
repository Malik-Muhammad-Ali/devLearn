import { Navigate } from "react-router-dom";
import useAppStore from "../zustand/store";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const user = useAppStore((state) => state.user);

  return user ? element : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
