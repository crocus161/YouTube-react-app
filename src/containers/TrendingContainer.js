import { connect } from 'react-redux';
import Trending from '../components/Trending/Trending';
import { setTrendingData } from '../store/Trending/actions';

const mapStateToProps = (state) => ({
    trendingList: state.trending.items
});

export default connect(mapStateToProps, { setTrendingData })(Trending);