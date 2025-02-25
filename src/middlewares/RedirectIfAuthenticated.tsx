import { Navigate } from "react-router-dom";
import useAppStore from "../zustand/store";

const RedirectIfAuthenticated = ({ element }: { element: JSX.Element }) => {
  const user = useAppStore((state) => state.user); // Get user from Zustand

  return user ? <Navigate to="/dashboard" replace /> : element;
};

export default RedirectIfAuthenticated;
