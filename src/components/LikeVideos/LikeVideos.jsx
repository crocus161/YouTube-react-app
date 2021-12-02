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
            vertical={true}
            small={false}
            items={items}
        />
    );
}

export default LikeVideos;