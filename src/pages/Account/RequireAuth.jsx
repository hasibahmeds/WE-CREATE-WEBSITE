import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Navigate, useLocation } from 'react-router';

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation()


    if (!user) {
        return (
            <Navigate to="/Login" state={{ from: location }} replace />
        );
    }
    return children;
};

export default RequireAuth; 