import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, }) => {
  let user = null;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;