import styles from './VideoCard.module.scss';
import he from 'he';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { WATCH } from '../../routes/consts';
import VideoCardInfo from './VideoCardInfo';
import VideoCardDuration from './VideoCardDuration';

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
                    src={snippet.thumbnails.medium.url} 
                    alt={snippet.title} 
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
                    title={snippet.title}
                >
                    {he.decode(snippet.title)}
                </NavLink>

                <VideoCardInfo 
                    vertical={vertical}
                    channelTitle={snippet.channelTitle}
                    channelId={snippet.channelId}
                    published={snippet.publishedAt}
                    viewCount={statistics?.viewCount}
                />

                <p className={styles.card__description}>
                    {he.decode(snippet.description)}
                </p>

            </div>
        </div>
    );
}

export default VideoCard;