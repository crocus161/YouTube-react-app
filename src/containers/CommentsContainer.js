import { connect } from 'react-redux';
import Comments from '../components/Watch/CurrentVideo/Comments/Comments';
import { setWatchComments } from '../store/CommentsWatch/actions';

const mapStateToProps = (state) => ({
    items: state.commentsWatch.items
});

export default connect(mapStateToProps, { setWatchComments })(Comments);