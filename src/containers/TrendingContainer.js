import { connect } from 'react-redux';
import Trending from '../components/Trending/Trending';
import { setTrendingData, setTrendingMoreData } from '../store/Trending/actions';

const mapStateToProps = (state) => ({
    trendingList: state.trending.items,
    totalResults: state.trending.pageInfo?.totalResults,
    loading: state.trending.loading,
    isFull: state.trending.isFull
});

export default connect(mapStateToProps, { setTrendingData, setTrendingMoreData })(Trending);