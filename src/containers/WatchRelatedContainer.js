import { connect } from 'react-redux';
import { setRelatedData, setMoreRelatedData } from '../store/Watch/actions';
import { setMoveUp } from '../store/CardsBox/actions';
import RelatedVideos from '../components/Watch/RelatedVideos/RelatedVideos';
import { compose } from 'redux';
import errorHoc from '../hoc/errorHoc/errorHoc';

const mapStateToProps = (state) => ({
    relatedVideos: state.watch.relatedVideos,
});

export default compose(
    connect(mapStateToProps, {setRelatedData, setMoveUp, setMoreRelatedData}),
    errorHoc
)(RelatedVideos);