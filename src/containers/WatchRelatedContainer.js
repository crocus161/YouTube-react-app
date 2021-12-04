import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setMoveUp } from '../store/CardsBox/actions';
import RelatedVideos from '../components/Watch/RelatedVideos/RelatedVideos';
import { setMoreRelatedData, setRelatedData } from '../store/RelatedWatch/actions';

const mapStateToProps = (state) => ({
    relatedVideos: state.relatedWatch,
});

export default compose(
    connect(mapStateToProps, {setRelatedData, setMoveUp, setMoreRelatedData}),
    errorHoc
)(RelatedVideos);