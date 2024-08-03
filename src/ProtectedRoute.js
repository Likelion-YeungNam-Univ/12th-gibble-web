import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  return accessToken ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
