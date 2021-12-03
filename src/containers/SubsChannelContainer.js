import { connect } from 'react-redux';

import { compose } from 'redux';
import SubsChannel from '../components/SubsChannel/SubsChannel';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setSubsChannel, setMoreSubsChannel } from '../store/Subscribe/actions';


const mapStateToProps = (state) => ({
    items: state.subscribe.items,
    totalResults: state.subscribe.pageInfo?.totalResults,
    loading: state.subscribe.loading
});

export default compose(
    connect(mapStateToProps, { setSubsChannel, setMoreSubsChannel }),
    errorHoc
)(SubsChannel);