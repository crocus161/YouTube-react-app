import { setSearchResultData } from '../store/Search/actions';
import { setSignIn } from '../store/Auth/actions';
import Navbar from '../components/Navbar/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userProfile: state.auth.userProfile
});

export default connect(mapStateToProps, {setSearchResultData, setSignIn})(Navbar);