import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import ChannelVideos from '../components/Channel/ChannelVideos/ChannelVideos';
import { setChannelVideos, setMoreChannelVideos } from '../store/ChannelVideos/actions';

const mapStateToProps = (state) => ({
    items: state.channelVideos.items,
    loading: state.channelVideos.loading,
    totalResults: state.channelVideos.pageInfo?.totalResults,
});

export default compose(
    connect(mapStateToProps, { setChannelVideos, setMoreChannelVideos }),
    errorHoc
)(ChannelVideos);