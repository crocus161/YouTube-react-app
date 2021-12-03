import moment from 'moment';
import styles from './Statistics.module.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Reaction from './Reaction/Reaction';

const Statistics = ({statistics, snippet, rate, setRateVideo, setRatingVideo, videoId, isAuth}) => {

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            setRatingVideo(videoId);
        }

        return () => cleanupFunction = true;
    }, [videoId, setRatingVideo, isAuth]);

    return (
        <div className={styles.statistics}>

            <NavLink 
                to={`/channel/${snippet?.channelId}`} 
                className={styles.channel__title}
                title={snippet?.channelTitle}
            >
                {snippet?.channelTitle}
            </NavLink>

            <p>{statistics?.viewCount 
                    ? (+statistics?.viewCount).toLocaleString() 
                    : null} views</p>

            <p>{moment(snippet?.publishedAt).fromNow()}</p>

            <Reaction 
                setRateVideo={setRateVideo}
                statistics={statistics}
                videoId={videoId}
                isAuth={isAuth}
                rate={rate}
            />
        </div>
    );
}

export default Statistics;