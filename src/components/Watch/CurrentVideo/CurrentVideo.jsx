import styles from './CurrentVideo.module.scss';
import EmbedVideo from '../../../common/EmbedVideo/EmbedVideo';
import { useEffect } from 'react';


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
        </div>
    )
}

export default CurrentVideo;