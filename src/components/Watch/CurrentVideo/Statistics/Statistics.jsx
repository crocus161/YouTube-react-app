import moment from 'moment';
import { NavLink } from 'react-router-dom';
import Reaction from './Reaction/Reaction';
import styles from './Statistics.module.scss';

const Statistics = ({statistics, snippet, rate, setRateVideo, setRatingVideo, videoId, isAuth}) => {
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
                setRatingVideo={setRatingVideo}
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