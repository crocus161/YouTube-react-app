import { useEffect } from 'react';
import { useMatch } from 'react-router';
import EmbedVideo from '../../common/EmbedVideo/EmbedVideo';
import { WATCH } from '../../routes/consts';
import RelatedVideos from './RelatedVideos/RelatedVideos';
import styles from './Watch.module.scss';

const Watch = ({ setWatchData, setRelatedData, watchVideo, relatedVideos }) => {
    const {params: { videoId }} = useMatch(`${WATCH}/:videoId`);
    const {contentDetails, statistics, snippet, id} = watchVideo;
    

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {
            setWatchData(videoId);
        }

        return () => cleanupFunction = true;
    }, [videoId]);

    return (
        <div className={styles.watch}>

            <div className={styles.watch__current}>

                <EmbedVideo 
                    title={snippet?.title} 
                    id={id}
                />

            </div>

            <RelatedVideos
                setRelatedData={setRelatedData}
                relatedVideos={relatedVideos} 
                videoId={id}
            />

        </div>
    );
}

export default Watch;