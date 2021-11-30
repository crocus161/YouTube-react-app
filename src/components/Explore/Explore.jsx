import React, { useEffect } from 'react';
import CardsBoxContainer from '../../containers/CardsBoxContainer';
import VideoCardsSkeleton from '../../common/Skeletons/VideoCardSkeleton/VideoCardsSkeleton';
import VideoCard from '../../common/VideoCard/VideoCard';

const Explore = ({ explore, setExploreData, setMoveUp, setMoreExploreData}) => {
    const { items, totalResults, loading } = explore;

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            setExploreData();
            //set scroll top of the box to 0 after new request
            setMoveUp();
        }

        return () => cleanupFunction = true;
    }, [setExploreData, setMoveUp]);

    return (
        <CardsBoxContainer
            title='Explore'
            listLength={items.length}
            totalResults={totalResults}
            fetchMoreData={setMoreExploreData}
            small={false}
        >
            {loading
                ? [...Array(items.length || 24)].map((_, i) => (
                    <VideoCardsSkeleton key={i} vertical={true} small={false} />
                ))
                : items.map((item, i) => (
                    <VideoCard key={i} vertical={true} small={false} data={item} />
                ))
            }
        </CardsBoxContainer>
    )
}

export default Explore
