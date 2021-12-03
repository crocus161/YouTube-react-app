import { connect } from 'react-redux';
import { setLikeVideos, setMoreLikeVideos } from '../store/Like/actions';
import LikeVideos from '../components/LikeVideos/LikeVideos';
import { compose } from 'redux';
import errorHoc from '../hoc/errorHoc/errorHoc';

const mapStateToProps = (state) => ({
    items: state.like.items,
    totalResults: state.like.pageInfo?.totalResults,
    loading: state.like.loading
});

export default compose(
    connect(mapStateToProps, { setLikeVideos, setMoreLikeVideos }),
    errorHoc
)(LikeVideos);