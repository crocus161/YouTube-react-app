import { connect } from 'react-redux';
import { compose } from 'redux';
import Comments from '../components/Watch/CurrentVideo/Comments/Comments';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setWatchComments, setMoreWatchComments } from '../store/CommentsWatch/actions';

const mapStateToProps = (state) => ({
    items: state.commentsWatch.items,
    totalResults: state.commentsWatch.pageInfo.totalResults
});

export default compose(
    connect(mapStateToProps, { setWatchComments, setMoreWatchComments }),
    errorHoc
)(Comments);