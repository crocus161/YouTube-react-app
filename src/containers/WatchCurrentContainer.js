import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setWatchData } from '../store/CurrentWatch/actions';
import { setRateVideo, setRatingVideo } from '../store/Like/actions';
import CurrentVideo from '../components/Watch/CurrentVideo/CurrentVideo';

const mapStateToProps = (state) => ({
    rate: state.like.rate,
    isAuth: state.auth.isAuth,
    watchVideo: state.currentWatch,
});

export default compose(
    connect(mapStateToProps, {setWatchData, setRateVideo, setRatingVideo}),
    errorHoc
)(CurrentVideo);