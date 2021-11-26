import styles from './VideoCard.module.scss';
import numbersFormat from '../../utils/numbersFormat';
import he from 'he';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cardsApi } from '../../api/cardApi';

const VideoCardInfo = ({channelTitle, channelId, published, viewCount, vertical}) => {
    const [channelIcon, setChannelIcon] = useState(null);

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {
            cardsApi
                .getChannelIcon(channelId)
                .then(icon => setChannelIcon(icon));
        }
            
        return () => cleanupFunction = true;
    }, []);

    return (
        <div className={styles.card__info}>

            {channelIcon &&

                <NavLink to={`/channel/:${channelId}`} className={styles.card__icon} >
                    <LazyLoadImage
                        src={channelIcon}
                        alt={channelTitle}
                        effect='blur'
                    />
                </NavLink>
            }

            {!vertical &&
                <>
                    <p className={styles.channel__title}>
                        {he.decode(channelTitle)}
                    </p>

                    <p className={styles.views__count}>
                        {`${numbersFormat(viewCount)} views`}
                    </p>
                </>
            }

            <p className={styles.publishing__date}>
                {moment(published).fromNow()}
            </p>

        </div>
    );
}

export default VideoCardInfo