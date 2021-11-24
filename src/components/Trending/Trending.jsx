import { useEffect } from 'react';
import VideoCard from '../../common/VideoCard/VideoCard';
import CardsBoxContainer from '../../containers/CardsBoxContainer';
import VideoCardsSkeleton from '../../common/Skeletons/VideoCardSkeleton/VideoCardsSkeleton';

const Trending = ({ trendingList, setTrendingData, setTrendingMoreData, totalResults, loading }) => {

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {
            setTrendingData();
        }

        return () => cleanupFunction = true;
    }, []);

    return (
        <CardsBoxContainer
            title='Trending' 
            listLength={trendingList.length}
            totalResults={totalResults}
            fetchMoreData={setTrendingMoreData}
        >
            {loading
                ? [...Array(trendingList.length || 24)].map((_, index) => (
                    <VideoCardsSkeleton key={index} vertical={false}/>
                ))
                : trendingList.map(item => (
                    <VideoCard key={item.id} vertical={false} data={item} />
                ))
            }
        </CardsBoxContainer>
    );
}

export default Trending;