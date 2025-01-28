// src/components/PrivateRoute.tsx
import { useAuth } from "context/authContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  requireAdmin: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requireAdmin }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin && !user.isAdmin) {
    return <Navigate to="/forbidden" />;
  }

  return <Outlet />; // Render the child routes
};

export default PrivateRoute;
