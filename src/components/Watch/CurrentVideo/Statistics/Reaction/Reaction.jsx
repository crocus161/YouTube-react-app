import styles from './Reaction.module.scss'
import numbersFormat from '../../../../../utils/numbersFormat';
import {ReactComponent as LikeHeartIcon} from '../../../../../assets/icons/likes.svg';
import {ReactComponent as DislikeHeartIcon} from '../../../../../assets/icons/heart-dislike.svg';

const Reaction = ({setRateVideo, isAuth, statistics, rate, videoId}) => {
    console.log(rate)
    const handleLike = () => {
        setRateVideo(videoId, 'like');
    }

    const handleDislike = () => {
        setRateVideo(videoId, 'dislike');
    }

    return (
        <div className={styles.statistics__reaction}>

            <button
                disabled={!isAuth}
                onClick={handleLike}
                className={`${rate.like ? styles.active : ''}`}
                title={!isAuth ? 'You must be authorized' : statistics?.likeCount}
            >
                <LikeHeartIcon />
                {numbersFormat(statistics?.likeCount)}
            </button>

            <button
                disabled={!isAuth}
                onClick={handleDislike}
                className={`${rate.dislike ? styles.active : ''}`}
                title={!isAuth ? 'You must be authorized' : statistics?.dislikeCount}
            >
                <DislikeHeartIcon />
                {numbersFormat(statistics?.dislikeCount)}
            </button>

        </div>
    );
}

export default Reaction;