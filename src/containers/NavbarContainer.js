import { setSearchResultData } from '../store/Search/actions';
import Navbar from '../components/Navbar/Navbar';
import { connect } from 'react-redux';

export default connect(null, {setSearchResultData})(Navbar);