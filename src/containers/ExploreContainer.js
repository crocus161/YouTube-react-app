import Explore from '../components/Explore/Explore';
import { useDispatch } from 'react-redux'

const ExploreContainer = () => {

    const dispatch = useDispatch();

    return (
        <Explore />
    );
}

export default ExploreContainer;