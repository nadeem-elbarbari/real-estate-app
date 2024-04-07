import { Navigate, Outlet } from 'react-router';
import useAuthStatus from '../Hooks/useAuthStatus';

const PrivateRoute = () => {
  const { loggedIn, checking } = useAuthStatus();
  if (checking) {
    return <h1>Loading...</h1>;
  }
  return loggedIn ? <Outlet /> : <Navigate to={'/sign-in'} />;
};

export default PrivateRoute;
