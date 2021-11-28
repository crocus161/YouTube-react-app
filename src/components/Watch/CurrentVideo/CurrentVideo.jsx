import styles from './CurrentVideo.module.scss';
import EmbedVideo from '../../../common/EmbedVideo/EmbedVideo';
import { useEffect } from 'react';
import Statistics from './Statistics/Statistics';
import Description from './Description/Description';


const CurrentVideo = ({ videoId, watchVideo, setWatchData }) => {
    const { contentDetails, statistics, snippet } = watchVideo;

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            setWatchData(videoId);
        }

        return () => cleanupFunction = true;
    }, [videoId, setWatchData]);

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
        </div>
    )
}

export default CurrentVideo;