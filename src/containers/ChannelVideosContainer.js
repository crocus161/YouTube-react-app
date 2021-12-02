import { connect } from 'react-redux';
import { setChannelVideos, setMoreChannelVideos } from '../store/ChannelVideos/actions';
import ChannelVideos from '../components/Channel/ChannelVideos/ChannelVideos';
import { compose } from 'redux';
import errorHoc from '../hoc/errorHoc/errorHoc';

const mapStateToProps = (state) => ({
    items: state.channelVideos.items,
    totalResults: state.channelVideos.pageInfo?.totalResults,
    loading: state.channelVideos.loading
});

export default compose(
    connect(mapStateToProps, { setChannelVideos, setMoreChannelVideos }),
    errorHoc
)(ChannelVideos);