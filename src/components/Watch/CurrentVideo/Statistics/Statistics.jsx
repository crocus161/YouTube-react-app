import {ReactComponent as LikeHeartIcon} from '../../../../assets/icons/likes.svg';
import {ReactComponent as DislikeHeartIcon} from '../../../../assets/icons/heart-dislike.svg';
import moment from 'moment';
import numbersFormat from '../../../../utils/numbersFormat';
import styles from './Statistics.module.scss';

const Statistics = ({statistics, snippet}) => {
    return (
        <div className={styles.statistics}>

            <p 
                className={styles.channel__title}
                title={snippet?.channelTitle}
            >
                {snippet?.channelTitle}
            </p>

            <p>{statistics?.viewCount 
                    ? (+statistics?.viewCount).toLocaleString() 
                    : null} views</p>

            <p>{moment(snippet?.publishedAt).fromNow()}</p>

            <div className={styles.statistics__reaction}>

                <p title={statistics?.likeCount}>
                    <LikeHeartIcon />
                    {numbersFormat(statistics?.likeCount)}
                </p>

                <p title={statistics?.dislikeCount}>
                    <DislikeHeartIcon />
                    {numbersFormat(statistics?.dislikeCount)}
                </p>

            </div>
        </div>
    )
}

export default Statistics;