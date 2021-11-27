import { connect } from 'react-redux';
import CurrentVideo from '../components/Watch/CurrentVideo/CurrentVideo';
import { setWatchData } from '../store/Watch/actions';

const mapStateToProps = (state) => ({
    watchVideo: state.watch.watchVideo
});

export default connect(mapStateToProps, {setWatchData})(CurrentVideo);