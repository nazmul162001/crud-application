import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const RequireAuth = ({children}) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

    // spinner
    // if(loading){
    //   return <Spinner></Spinner>
    // }

if(loading){
  return <Spinner></Spinner>
}
    
  
  if(!user){
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
  }
  
  return children;
};

export default RequireAuth;