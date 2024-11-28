import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext)
    const location = useLocation()
    // console.log(location);
    
    console.log('from private loading when user is not here',loading);
    
    if(loading){
        
        return <h1>Loading..........</h1>
    }

    if(!user){
        return <Navigate state={{from:location.pathname}} to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;