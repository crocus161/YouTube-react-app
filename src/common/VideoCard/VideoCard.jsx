import styles from './VideoCard.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { WATCH } from '../../routes/consts';
import VideoCardInfo from './VideoCardInfo';
import VideoCardDuration from './VideoCardDuration';
import { fullStringFormat, decode } from '../../utils/stringFormat.js'

const VideoCard = ({ data, vertical, small }) => {

    const { snippet, contentDetails, statistics } = data;
    const videoId = data.id?.videoId || data.contentDetails?.videoId || data.id;
    
    return (
        <div className={`
            ${styles.card} 
            ${vertical ? styles.vertical : styles.horizontal}
            ${small ? styles.small : ''}
        `}>

            <NavLink to={`${WATCH}/${videoId}`} className={styles.card__overlay} />

            <div className={styles.card__img}>

                <LazyLoadImage 
                    src={snippet?.thumbnails.medium.url} 
                    alt={snippet?.title} 
                    effect='blur'
                />

                <VideoCardDuration 
                    contentDetails={contentDetails}
                    videoId={videoId}
                />

            </div>

            <div className={styles.card__meta}>

                <NavLink 
                    to={`${WATCH}/${videoId}`} 
                    className={styles.card__title} 
                    title={snippet?.title}
                >
                    {snippet?.title ? decode(snippet?.title) : null}
                </NavLink>

                <VideoCardInfo 
                    vertical={vertical}
                    channelTitle={snippet?.channelTitle}
                    channelId={snippet?.channelId}
                    published={snippet?.publishedAt}
                    viewCount={statistics?.viewCount}
                />

                <p className={styles.card__description}>
                    {snippet?.description ? fullStringFormat(snippet?.description) : null}
                </p>

            </div>
        </div>
    );
}

export default VideoCard;