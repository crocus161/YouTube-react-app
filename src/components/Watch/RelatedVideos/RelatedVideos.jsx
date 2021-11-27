import { useEffect } from 'react';
import styles from './RelatedVideos.module.scss';
import CardsBoxContainer from '../../../containers/CardsBoxContainer';
import VideoCardsSkeleton from '../../../common/Skeletons/VideoCardSkeleton/VideoCardsSkeleton';
import VideoCard from '../../../common/VideoCard/VideoCard';

const RelatedVideos = ({ setRelatedData, relatedVideos, videoId, setMoveUp }) => {

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
                fetchMoreData={setRelatedData}
                small={true}
            >
                {loading
                    ? [...Array(items.length || 24)].map((_, i) => (
                        <VideoCardsSkeleton key={i} vertical={true} small={true}/>
                    ))
                    : items.map((item, i) => (
                        <VideoCard key={i} vertical={true} small={true} data={item} />
                    ))
                }
            </CardsBoxContainer>
        </div>
    );
}

export default RelatedVideos;