import { connect } from 'react-redux';
import Feedback from '../components/Feedback/Feedback';
import { sendFeedback } from '../store/Feedback/actions';

const mapStateToProps = (state) => ({
    errorStatus: state.feedback.errorStatus,
    userName: state.auth.userProfile?.name,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { sendFeedback })(Feedback);