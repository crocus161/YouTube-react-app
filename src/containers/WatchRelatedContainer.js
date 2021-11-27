import { connect } from 'react-redux';
import { setRelatedData } from '../store/Watch/actions';
import { setMoveUp } from '../store/CardsBox/actions';
import RelatedVideos from '../components/Watch/RelatedVideos/RelatedVideos';

const mapStateToProps = (state) => ({
    relatedVideos: state.watch.relatedVideos,
});

export default connect(mapStateToProps, {setRelatedData, setMoveUp})(RelatedVideos);