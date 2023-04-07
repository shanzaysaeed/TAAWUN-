import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const RoleProtectedRoute = ({ role, children }) => {
  const { user } = UserAuth();
  const localUser = JSON.parse(localStorage.getItem('user'));

  console.log("database: ", user.role, " my: ", role)
  console.log("p: ", localStorage.getItem("user"))
  
  if (!user && !localUser) {
    return <Navigate to='/' />;
  }

  if ((user && user.role !== role) || (localUser && localUser.role !== role)) {
    return <Navigate to='/' />;
  }

  return children;
};


export default RoleProtectedRoute;
