import { connect } from 'react-redux';
import Comments from '../components/Watch/CurrentVideo/Comments/Comments';
import { setWatchComments, setMoreWatchComments } from '../store/CommentsWatch/actions';

const mapStateToProps = (state) => ({
    items: state.commentsWatch.items,
    totalResults: state.commentsWatch.pageInfo.totalResults
});

export default connect(mapStateToProps, { setWatchComments, setMoreWatchComments })(Comments);