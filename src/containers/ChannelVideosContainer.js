import { connect } from 'react-redux';
import { setChannelVideos, setMoreChannelVideos } from '../store/ChannelVideos/actions';
import ChannelVideos from '../components/Channel/ChannelVideos/ChannelVideos';

const mapStateToProps = (state) => ({
    items: state.channelVideos.items,
    totalResults: state.channelVideos.pageInfo?.totalResults,
    loading: state.channelVideos.loading
});

export default connect(mapStateToProps, { setChannelVideos, setMoreChannelVideos })(ChannelVideos);