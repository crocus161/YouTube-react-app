import { useEffect } from 'react';
import styles from './CurrentVideo.module.scss';
import Statistics from './Statistics/Statistics';
import Description from './Description/Description';
import EmbedVideo from '../../../common/EmbedVideo/EmbedVideo';
import CommentsContainer from '../../../containers/CommentsContainer';
import CurrentWatchSkeleton from '../../../common/Skeletons/CurrentWatchSkeleton/CurrentWatchSkeleton';


const CurrentVideo = ({ videoId, watchVideo, setWatchData }) => {
    const { contentDetails, statistics, snippet, loading } = watchVideo;
    console.log(loading);

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            setWatchData(videoId);
        }

        return () => cleanupFunction = true;
    }, [videoId, setWatchData]);

    if(loading) {
        return <CurrentWatchSkeleton />
    }

    return (
        <div className={styles.current}>

            <EmbedVideo
                title={snippet?.title}
                id={videoId}
            />

            <div className="current__meta">

                <h2 className={styles.current__title}>{snippet?.title}</h2>

                <Statistics 
                    snippet={snippet}
                    statistics={statistics}
                />

                <Description 
                    description={snippet?.description}
                />

            </div>

            <CommentsContainer videoId={videoId} />
        </div>
    )
}

export default CurrentVideo;