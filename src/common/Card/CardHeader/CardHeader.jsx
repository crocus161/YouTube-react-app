import styles from '../Card.module.scss';
import CardDuration from './CardDuration';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CardHeader = ({snippet, contentDetails, videoId}) => {
    return (
        <div className={styles.card__img}>

            <LazyLoadImage
                effect='blur'
                alt={snippet?.title}
                src={snippet?.thumbnails.medium.url}
            />

            <CardDuration
                videoId={videoId}
                contentDetails={contentDetails}
            />

        </div>
    );
}

export default CardHeader;