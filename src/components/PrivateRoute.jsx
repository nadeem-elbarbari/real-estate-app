import { Navigate, Outlet } from 'react-router';
import useAuthStatus from '../Hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, checking } = useAuthStatus();
  if (checking) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to={'/sign-in'} />;
};

export default PrivateRoute;
