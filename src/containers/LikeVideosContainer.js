import { connect } from 'react-redux';
import { setLikeVideos, setMoreLikeVideos } from '../store/LikeVideos/actions';
import LikeVideos from '../components/LikeVideos/LikeVideos';
import { compose } from 'redux';
import errorHoc from '../hoc/errorHoc/errorHoc';

const mapStateToProps = (state) => ({
    items: state.likeVideos.items,
    totalResults: state.likeVideos.pageInfo?.totalResults,
    loading: state.likeVideos.loading
});

export default compose(
    connect(mapStateToProps, { setLikeVideos, setMoreLikeVideos }),
    errorHoc
)(LikeVideos);