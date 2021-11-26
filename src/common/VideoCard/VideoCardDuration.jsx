import moment from 'moment';
import styles from './VideoCard.module.scss';
import { useEffect, useState } from 'react';
import { cardsApi } from '../../api/cardApi';

const VideoCardDuration = ({contentDetails, videoId}) => {
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {
    
            if(contentDetails) {
                setDuration(contentDetails.duration);
                return () => cleanupFunction = true;
            }

            cardsApi
                .getVideoDuration(videoId)
                .then(response => setDuration(response));

        }
            
        return () => cleanupFunction = true;
    }, []);


    const seconds = moment.duration(duration).asSeconds();
    const formatDuration = moment.utc(seconds * 1000).format('mm:ss');

    return (
        <>
            {
                duration &&
                <p className={styles.card__duration}>{formatDuration}</p> 
            }
        </>
    )
}

export default VideoCardDuration;