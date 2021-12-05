import { connect } from 'react-redux';
import { setNewComment } from '../store/CommentsForm/actions';
import CommentForm from '../components/Watch/CurrentVideo/CommentForm/CommentForm';

const mapStateToProps = (state) => ({
    error: state.commentsForm.error,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { setNewComment })(CommentForm);