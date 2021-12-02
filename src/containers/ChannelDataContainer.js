import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setChannelData } from '../store/ChannelData/actions';
import ChannelData from '../components/Channel/ChannelData/ChannelData';

const mapStateToProps = (state) => ({
    data: state.channelData
});

export default compose(
    connect(mapStateToProps, { setChannelData }),
    errorHoc
)(ChannelData);