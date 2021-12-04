import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import Search from '../components/Search/Search';
import { setMoreSearchResultData } from '../store/Search/actions';

const mapStateToProps = (state) => ({
    items: state.search.items,
    totalResults: state.search.pageInfo?.totalResults,
    loading: state.search.loading
})

export default compose(
    connect(mapStateToProps, {setMoreSearchResultData}),
    errorHoc
)(Search);