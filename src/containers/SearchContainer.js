import { connect } from 'react-redux';
import Search from '../components/Search/Search';
import { setMoreSearchResultData } from '../store/Search/actions';

const mapStateToProps = (state) => ({
    searchResultList: state.search.items
})

export default connect(mapStateToProps, {setMoreSearchResultData})(Search);