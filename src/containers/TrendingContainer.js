import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import Trending from '../components/Trending/Trending';
import { setTrendingData, setTrendingMoreData } from '../store/Trending/actions';

const mapStateToProps = (state) => ({
    items: state.trending.items,
    isFull: state.trending.isFull,
    loading: state.trending.loading,
    totalResults: state.trending.pageInfo?.totalResults,
});

export default compose(
    connect(mapStateToProps, { setTrendingData, setTrendingMoreData }),
    errorHoc
)(Trending)