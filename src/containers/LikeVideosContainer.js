import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import LikeVideos from '../components/LikeVideos/LikeVideos';
import { setLikeVideos, setMoreLikeVideos } from '../store/Like/actions';

const mapStateToProps = (state) => ({
    items: state.like.items,
    loading: state.like.loading,
    totalResults: state.like.pageInfo?.totalResults,
});

export default compose(
    connect(mapStateToProps, { setLikeVideos, setMoreLikeVideos }),
    errorHoc
)(LikeVideos);