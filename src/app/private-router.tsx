// src/components/PrivateRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  requireAdmin: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requireAdmin }) => {
  const isAuthenticated = localStorage.getItem("token") ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin) {
    return <Navigate to="/forbidden" />;
  }

  return <Outlet />; // Render the child routes
};

export default PrivateRoute;
