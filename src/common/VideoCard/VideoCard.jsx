import styles from './VideoCard.module.scss';
import numbersFormat from '../../utils/numbersFormat';
import calcSpentDate from '../../utils/spentDateFormat';

const VideoCard = ({data, vertical}) => {
    return (
        <div className={`${styles.card} ${vertical ? styles.vertical : styles.horizontal}`}>
            <div className={styles.card__img}>
                <img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} />
            </div>


            <div className={styles.card__meta}>

                <h3 className={styles.card__title} title={data.snippet.title}>
                    {data.snippet.title}
                </h3>

                <div className={styles.card__info}>

                    <p className={styles.channel__title}>
                        {data.snippet.channelTitle}
                    </p>
                    
                    {
                        !vertical &&
                        <p className={styles.views__count}>
                            {`${numbersFormat(data.statistics.viewCount)} views`}
                        </p>
                    }

                    <p className={styles.publishing__date}>
                        {calcSpentDate(data.snippet.publishedAt)}
                    </p>

                </div>

                <p className={styles.card__description}>
                    {data.snippet.description}
                </p>

            </div>
        </div>
    );
}

export default VideoCard;