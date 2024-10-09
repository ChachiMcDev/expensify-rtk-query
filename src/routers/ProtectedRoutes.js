import React from 'react';
import Header from '../components/Header';
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const authed = useSelector((state) => state.auth.isAuthenticated);

    return authed ? (
        <>
            <Header />
            {children}
        </>
    ) : (
        <Navigate to="/" />
    );


    // return (
    //     authed ? children : <Navigate to="/" />);
};


export default ProtectedRoute;