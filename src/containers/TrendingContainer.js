import { connect } from 'react-redux';
import { compose } from 'redux';
import Trending from '../components/Trending/Trending';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setTrendingData, setTrendingMoreData } from '../store/Trending/actions';

const mapStateToProps = (state) => ({
    trendingList: state.trending.items,
    totalResults: state.trending.pageInfo?.totalResults,
    loading: state.trending.loading,
    isFull: state.trending.isFull
});

export default compose(
    connect(mapStateToProps, { setTrendingData, setTrendingMoreData }),
    errorHoc
)(Trending)