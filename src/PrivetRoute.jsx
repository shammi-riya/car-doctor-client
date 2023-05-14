import { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
 const {users,loading} = useContext(AuthContext)
 const location = useLocation();

  if(loading){
    return <progress className="progress w-56"></progress>
  }

    if(users){
      return children
    }

    return <Navigate to='/login' replace state={{from:location}}></Navigate>
};

export default PrivetRoute;