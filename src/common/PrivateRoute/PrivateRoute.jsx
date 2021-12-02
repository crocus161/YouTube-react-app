import Authentication from '../../components/Authentication/Authentication';

const PrivateRoute = ({isAuth, children}) => isAuth ? children : <Authentication />;

export default PrivateRoute;

