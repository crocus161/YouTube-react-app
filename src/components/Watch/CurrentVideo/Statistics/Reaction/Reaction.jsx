import { useEffect } from 'react';
import styles from './Reaction.module.scss'
import numbersFormat from '../../../../../utils/numbersFormat';
import LikeHeartIcon from '../../../../../assets/icons/likes.svg?react';
import DislikeHeartIcon from '../../../../../assets/icons/heart-dislike.svg?react';

const Reaction = ({setRateVideo, isAuth, statistics, rate, videoId, setRatingVideo}) => {

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) setRatingVideo(videoId);

        return () => cleanupFunction = true;
    }, [videoId, setRatingVideo, isAuth]);

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