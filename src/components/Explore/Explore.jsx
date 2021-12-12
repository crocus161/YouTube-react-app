import React, { useEffect } from 'react';
import CardsBoxContainer from '../../containers/CardsBoxContainer';

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
            loading={loading}
            items={items}
            vertical
        />
    )
}

export default Explore
