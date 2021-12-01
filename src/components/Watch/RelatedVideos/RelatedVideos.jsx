import { useEffect } from 'react';
import styles from './RelatedVideos.module.scss';
import CardsBoxContainer from '../../../containers/CardsBoxContainer';

const RelatedVideos = ({ setMoreRelatedData, setRelatedData, relatedVideos, videoId, setMoveUp }) => {

    const {items, totalResults, loading} = relatedVideos;

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction && videoId) {
            setRelatedData(videoId);
            //set scroll top of the box to 0 after new request
            setMoveUp();
        }

        return () => cleanupFunction = true;
    }, [videoId, setRelatedData, setMoveUp]);

    return (
        <div className={styles.related}>
            <CardsBoxContainer
                title='Related videos'
                listLength={items.length}
                totalResults={totalResults}
                fetchMoreData={setMoreRelatedData}
                small={true}
                loading={loading}
                items={items}
                vertical={true}
            />
        </div>
    );
}

export default RelatedVideos;