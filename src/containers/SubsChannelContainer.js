import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import SubsChannel from '../components/SubsChannel/SubsChannel';
import { setSubsChannel, setMoreSubsChannel } from '../store/Subscribe/actions';


const mapStateToProps = (state) => ({
    items: state.subscribe.items,
    loading: state.subscribe.loading,
    totalResults: state.subscribe.pageInfo?.totalResults,
});

export default compose(
    connect(mapStateToProps, { setSubsChannel, setMoreSubsChannel }),
    errorHoc
)(SubsChannel);