// src/components/PrivateRoute.tsx
import { useAuth } from "context/authContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  requireAdmin: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requireAdmin }) => {
  const { user } = useAuth();
  const token = localStorage.getItem("token") || "";

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin && user && !user.isAdmin) {
    return <Navigate to="/forbidden" />;
  }

  return <Outlet />; // Render the child routes
};

export default PrivateRoute;
