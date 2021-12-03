import { connect } from 'react-redux';
import { compose } from 'redux';
import CurrentVideo from '../components/Watch/CurrentVideo/CurrentVideo';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setWatchData } from '../store/CurrentWatch/actions';
import { setRateVideo, setRatingVideo } from '../store/Like/actions';

const mapStateToProps = (state) => ({
    watchVideo: state.currentWatch,
    rate: state.like.rate,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {setWatchData, setRateVideo, setRatingVideo}),
    errorHoc
)(CurrentVideo);