import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  // Get the current user from the Redux store
  const { currentUser } = useSelector((state) => state.user);

  // If a user is logged in, render the requested route, otherwise redirect to the sign-in page
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}
