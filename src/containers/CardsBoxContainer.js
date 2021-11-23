import { connect } from 'react-redux';
import CardsBox from '../common/CardsBox/CardsBox';
import { setMoveUp } from '../store/CardsBox/actions';

const mapStateToProps = (state) => ({
    moveUp: state.cardsBox.moveUp
});

export default connect(mapStateToProps, {setMoveUp})(CardsBox);