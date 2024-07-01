import { useEffect } from 'react';
import styles from './RelatedVideos.module.scss';
import CardsBoxContainer from '../../../containers/CardsBoxContainer';

const RelatedVideos = ({ watchVideo, setMoreRelatedData, setRelatedData, relatedVideos, setMoveUp }) => {
    const channelId = watchVideo.snippet?.channelId;
    const { items, totalResults, loading } = relatedVideos;

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction && channelId) {
            setRelatedData(channelId);
            setMoveUp();
        }

        return () => cleanupFunction = true;
    }, [channelId, setRelatedData, setMoveUp]);

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