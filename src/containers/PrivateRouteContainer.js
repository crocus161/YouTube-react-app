import { connect } from 'react-redux';
import PrivateRoute from '../common/PrivateRoute/PrivateRoute';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, null)(PrivateRoute);