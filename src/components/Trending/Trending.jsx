import { useEffect } from 'react';
import CardsBoxContainer from '../../containers/CardsBoxContainer';

const Trending = ({ items, setTrendingData, setTrendingMoreData, totalResults, loading, isFull }) => {

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction && !isFull) {
            setTrendingData();
        }

        return () => cleanupFunction = true;
    }, []);

    return (
        <CardsBoxContainer
            title='Trending' 
            listLength={items.length}
            totalResults={totalResults}
            fetchMoreData={setTrendingMoreData}
            small={false}
            loading={loading}
            items={items}
            vertical={false}
        />
    );
}

export default Trending;