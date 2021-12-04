import moment from 'moment';
import styles from '../Card.module.scss';
import { useEffect, useState } from 'react';
import { cardsApi } from '../../../api/cardApi';

const CardDuration = ({contentDetails, videoId}) => {
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction && videoId) {
    
            if(contentDetails) {
                setDuration(contentDetails.duration);
                return () => cleanupFunction = true;
            }

            cardsApi
                .getVideoDuration(videoId)
                .then(response => setDuration(response));

        }
            
        return () => cleanupFunction = true;
    }, [videoId, contentDetails]);

    const seconds = moment.duration(duration).asSeconds();
    const formatDuration = moment.utc(seconds * 1000).format('HH:mm:ss').replace(/00:/, '');

    return (
        <>
            { duration && <p className={styles.card__duration}>{formatDuration}</p> }
        </>
    )
}

export default CardDuration;