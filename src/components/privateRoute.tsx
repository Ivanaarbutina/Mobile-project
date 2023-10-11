import React from "react";
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;
