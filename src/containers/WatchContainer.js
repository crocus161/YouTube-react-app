import { connect } from 'react-redux';
import { compose } from 'redux';
import Watch from '../components/Watch/Watch';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setWatchData, setRelatedData } from '../store/Watch/actions';


const mapStateToProps = (state) => ({
    watchVideo: state.watch.watchVideo,
    relatedVideos: state.watch.relatedVideos
});

export default compose(
    connect(mapStateToProps, { setWatchData, setRelatedData }),
    // errorHoc
)(Watch)