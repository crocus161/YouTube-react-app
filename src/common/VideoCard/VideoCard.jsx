import styles from './VideoCard.module.scss';
import numbersFormat from '../../utils/numbersFormat';

const VideoCard = ({data, vertical}) => {
    return (
        <div className={`${styles.card} ${vertical ? styles.vertical : styles.horizontal}`}>
            <div className={styles.card__img}>
                <img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} />
            </div>


            <div className={styles.card__meta}>

                <h3 className={styles.card__title}>
                    {data.snippet.title}
                </h3>

                <p className={styles.card__info}>
                    {data.snippet.channelTitle}&emsp;
                    {numbersFormat(data.statistics.viewCount)} views&emsp;
                    {data.snippet.publishedAt}
                </p>

                <p className={styles.card__description}>{data.snippet.description}</p>

            </div>
        </div>
    );
}

export default VideoCard;