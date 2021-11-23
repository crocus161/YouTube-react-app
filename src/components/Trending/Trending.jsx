import { useEffect } from 'react';
import VideoCard from '../../common/VideoCard/VideoCard';
import CardsBoxContainer from '../../containers/CardsBoxContainer';

const Trending = ({ trendingList, setTrendingData }) => {

    useEffect(() => {
        setTrendingData();
    }, []);


    return (
        <CardsBoxContainer
            title='Trending' 
            listLength={trendingList.length}
            fetchMoreData={setTrendingData}
        >
            {trendingList.map(item => (
                <VideoCard key={item.id} vertical={false} data={item} />
            ))}
        </CardsBoxContainer>
    );
}

export default Trending;