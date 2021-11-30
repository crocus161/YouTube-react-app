import { connect } from 'react-redux';
import { setChannelVideos } from '../store/ChannelVideos/actions';
import ChannelVideos from '../components/Channel/ChannelVideos/ChannelVideos';

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { setChannelVideos })(ChannelVideos);