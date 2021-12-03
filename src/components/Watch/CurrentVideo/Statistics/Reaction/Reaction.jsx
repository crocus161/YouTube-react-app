import styles from './Reaction.module.scss'
import numbersFormat from '../../../../../utils/numbersFormat';
import {ReactComponent as LikeHeartIcon} from '../../../../../assets/icons/likes.svg';
import {ReactComponent as DislikeHeartIcon} from '../../../../../assets/icons/heart-dislike.svg';

const Reaction = ({setRateVideo, isAuth, statistics, rate, videoId}) => {

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
                title={!isAuth ? 'You must be authorized' : statistics?.likeCount}
                className={`${rate.like ? styles.active : ''}`}
            >
                <LikeHeartIcon />
                {numbersFormat(statistics?.likeCount)}
            </button>

            <button
                disabled={!isAuth}
                onClick={handleDislike}
                title={!isAuth ? 'You must be authorized' : statistics?.dislikeCount}
                className={`${rate.dislike ? styles.active : ''}`}
            >
                <DislikeHeartIcon />
                {numbersFormat(statistics?.dislikeCount)}
            </button>

        </div>
    );
}

export default Reaction;