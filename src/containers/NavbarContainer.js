import { setSearchResultData } from '../store/Search/actions';
import Navbar from '../components/Navbar/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {setSearchResultData})(Navbar);