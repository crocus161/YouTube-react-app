import { connect } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import { setSignIn } from '../store/Auth/actions';
import { setSearchResultData } from '../store/Search/actions';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userProfile: state.auth.userProfile
});

export default connect(mapStateToProps, {setSearchResultData, setSignIn})(Navbar);