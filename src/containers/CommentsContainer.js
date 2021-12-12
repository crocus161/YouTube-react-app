import { compose } from 'redux';
import { connect } from 'react-redux';
import Comments from '../components/Watch/CurrentVideo/Comments/Comments';
import { setWatchComments, setMoreWatchComments } from '../store/CommentsWatch/actions';

const mapStateToProps = (state) => ({
    items: state.commentsWatch.items,
    error: state.commentsWatch.error
});

export default compose(
    connect(mapStateToProps, { setWatchComments, setMoreWatchComments })
)(Comments);