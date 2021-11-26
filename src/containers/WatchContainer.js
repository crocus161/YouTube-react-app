import { connect } from 'react-redux';
import Watch from '../components/Watch/Watch';
import { setWatchData, setRelatedData } from '../store/Watch/actions';


const mapStateToProps = (state) => ({
    watchVideo: state.watch.watchVideo,
    relatedVideos: state.watch.relatedVideos
});

export default connect(mapStateToProps, { setWatchData, setRelatedData })(Watch);