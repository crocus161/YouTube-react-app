import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setChannelData } from '../store/ChannelData/actions';
import ChannelData from '../components/Channel/ChannelData/ChannelData';
import { setSubsStatus, setSubscribe, outSubscribe } from '../store/Subscribe/actions';

const mapStateToProps = (state) => ({
    data: state.channelData,
    subStatus: state.subscribe.subStatus,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, { setChannelData, setSubsStatus, setSubscribe, outSubscribe }),
    errorHoc
)(ChannelData);