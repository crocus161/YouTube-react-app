import { connect } from 'react-redux';
import { compose } from 'redux';
import CurrentVideo from '../components/Watch/CurrentVideo/CurrentVideo';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setWatchData } from '../store/CurrentWatch/actions';

const mapStateToProps = (state) => ({
    watchVideo: state.currentWatch
});

export default compose(
    connect(mapStateToProps, {setWatchData}),
    errorHoc
)(CurrentVideo);