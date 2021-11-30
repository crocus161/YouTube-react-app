import { connect } from 'react-redux';
import { setMoveUp } from '../store/CardsBox/actions';
import { compose } from 'redux';
import errorHoc from '../hoc/errorHoc/errorHoc';
import { setExploreData, setMoreExploreData } from '../store/Explore/actions';
import Explore from '../components/Explore/Explore';


const mapStateToProps = (state) => ({
    explore: state.explore,
});

export default compose(
    connect(mapStateToProps, {setExploreData, setMoveUp, setMoreExploreData}),
    errorHoc
)(Explore);