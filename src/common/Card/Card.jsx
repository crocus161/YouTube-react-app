import styles from './Card.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { WATCH } from '../../routes/consts';
import CardInfo from './CardInfo';
import CardDuration from './CardDuration';
import { fullStringFormat, decode } from '../../utils/stringFormat.js'
import { CHANNEL } from '../../routes/consts';

const Card = ({ data, vertical, small }) => {

    const { snippet, contentDetails, statistics } = data;

    const videoId = data.id?.videoId || data.contentDetails?.videoId || data.id;
    const channelId = snippet?.resourceId ? snippet?.resourceId.channelId : snippet?.channelId;
    
    const isChannelCard = data.id?.kind === 'youtube#channel' || data.kind === 'youtube#subscription';
    const to = isChannelCard ? `${CHANNEL}/${channelId}` : `${WATCH}/${videoId}`

    return (
        <div className={`
            ${styles.card} 
            ${vertical ? styles.vertical : styles.horizontal}
            ${small ? styles.small : ''}
            ${isChannelCard ? styles.channel : ''}
        `}>

            <NavLink to={to} className={styles.card__overlay} />

            <div className={styles.card__img}>

                <LazyLoadImage
                    src={snippet?.thumbnails.medium.url}
                    alt={snippet?.title}
                    effect='blur'
                />

                <CardDuration
                    contentDetails={contentDetails}
                    videoId={videoId}
                />

            </div>

            <div className={styles.card__meta}>

                <NavLink
                    to={to}
                    className={styles.card__title}
                    title={snippet?.title}
                >
                    {snippet?.title ? decode(snippet?.title) : null}
                </NavLink>

                <CardInfo
                    vertical={vertical}
                    isChannel={isChannelCard}
                    channelId={snippet?.channelId}
                    published={snippet?.publishedAt}
                    viewCount={statistics?.viewCount}
                    channelTitle={snippet?.channelTitle}
                />

                <p className={styles.card__description}>
                    {snippet?.description ? fullStringFormat(snippet?.description) : null}
                </p>

            </div>
        </div>
    );
}

export default Card;