// src/components/PrivateRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/authContext";

interface PrivateRouteProps {
  requireAdmin: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requireAdmin }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login"  />;
  }

  if (requireAdmin && user.isAdmin) {
    // If the user is not an admin, redirect to a forbidden page
    return <Navigate to="/forbidden" />;
  }

  return <Outlet />; // Render the child routes
};

export default PrivateRoute;
