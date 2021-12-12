import { useEffect } from 'react';
import CardsBoxContainer from '../../containers/CardsBoxContainer';

const LikeVideos = ({ setLikeVideos, setMoreLikeVideos, items, totalResults, loading }) => {

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {
            setLikeVideos();
        }

        return () => cleanupFunction = true;
    }, [setLikeVideos])


    return (
        <CardsBoxContainer
            fetchMoreData={setMoreLikeVideos}
            totalResults={totalResults}
            listLength={items.length}
            title='Like videos'
            loading={loading}
            items={items}
            vertical
        />
    );
}

export default LikeVideos;