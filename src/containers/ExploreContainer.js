import { compose } from 'redux';
import { connect } from 'react-redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import Explore from '../components/Explore/Explore';
import { setMoveUp } from '../store/CardsBox/actions';
import { setExploreData, setMoreExploreData } from '../store/Explore/actions';


const mapStateToProps = (state) => ({
    explore: state.explore,
});

export default compose(
    connect(mapStateToProps, {setExploreData, setMoveUp, setMoreExploreData}),
    errorHoc
)(Explore);