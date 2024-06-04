import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';

export default function ProtectedRouter({isAuthenticated}) {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
