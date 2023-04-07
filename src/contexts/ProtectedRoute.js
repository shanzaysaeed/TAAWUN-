import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const RoleProtectedRoute = ({ role, children }) => {
  const { user } = UserAuth();

  console.log("database: ", user.role, " my: ", role)
  
  if (!user) {
    return <Navigate to='/' />;
  }

  if (user.role !== role) {
    return <Navigate to='/' />;
  }

  return children;
};

export default RoleProtectedRoute;
