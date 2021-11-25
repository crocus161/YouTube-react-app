import styles from './VideoCard.module.scss';
import numbersFormat from '../../utils/numbersFormat';
import he from 'he';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { cardsApi } from '../../api/cardApi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const VideoCard = ({ data, vertical }) => {

    const { snippet } = data;

    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {

            cardsApi
                .getChannelIcon(snippet.channelId)
                .then(icon => setChannelIcon(icon));
    
            if(data.contentDetails) {
                setDuration(data.contentDetails.duration);
                return () => cleanupFunction = true;
            }
    
            const videoId = data.id?.videoId || data.contentDetails?.videoId || data.id;
            cardsApi
                .getVideoDuration(videoId)
                .then(response => setDuration(response));

        }
            
        return () => cleanupFunction = true;
    }, []);
        
    const seconds = moment.duration(duration).asSeconds();
    const formatDuration = moment.utc(seconds * 1000).format('mm:ss');

    return (
        <div className={`${styles.card} ${vertical ? styles.vertical : styles.horizontal}`}>

            <div className={styles.card__img}>

                <LazyLoadImage 
                    src={snippet.thumbnails.medium.url} 
                    alt={snippet.title} 
                    effect='blur'
                />

                {duration ? <p className={styles.card__duration}>{formatDuration}</p> : null}
                
            </div>


            <div className={styles.card__meta}>

                <h3 className={styles.card__title} title={snippet.title}>
                    {he.decode(snippet.title)}
                </h3>

                <div className={styles.card__info}>

                    {channelIcon && 
                        <LazyLoadImage 
                            className={styles.card__icon} 
                            src={channelIcon} 
                            alt={snippet.channelTitle} 
                            effect='blur'
                        />
                    }

                    {
                        !vertical &&
                        <>
                            <p className={styles.channel__title}>
                                {he.decode(snippet.channelTitle)}
                            </p>
                            <p className={styles.views__count}>
                                {`${numbersFormat(data.statistics.viewCount)} views`}
                            </p>
                        </>
                    }

                    <p className={styles.publishing__date}>
                        {moment(snippet.publishedAt).fromNow()}
                    </p>

                </div>

                <p className={styles.card__description}>
                    {he.decode(snippet.description)}
                </p>

            </div>
        </div>
    );
}

export default VideoCard;