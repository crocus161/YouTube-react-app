import { connect } from 'react-redux';
import { compose } from 'redux';
import Search from '../components/Search/Search';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setMoreSearchResultData } from '../store/Search/actions';

const mapStateToProps = (state) => ({
    searchResultList: state.search.items,
    totalResults: state.search.pageInfo?.totalResults,
    loading: state.search.loading
})

export default compose(
    connect(mapStateToProps, {setMoreSearchResultData}),
    errorHoc
)(Search);