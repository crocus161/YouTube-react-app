import styles from './VideoCard.module.scss';
import numbersFormat from '../../utils/numbersFormat';
import { decode } from '../../utils/stringFormat';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cardsApi } from '../../api/cardApi';

const VideoCardInfo = ({channelTitle, channelId, published, viewCount, vertical}) => {
    const [channelIcon, setChannelIcon] = useState(null);

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction && channelId) {
            cardsApi
                .getChannelIcon(channelId)
                .then(icon => setChannelIcon(icon));
        }
            
        return () => cleanupFunction = true;
    }, [channelId]);

    return (
        <div className={styles.card__info}>

            {channelIcon &&

                <NavLink to={`/channel/${channelId}`} className={styles.card__icon} >
                    <LazyLoadImage
                        src={channelIcon}
                        alt={channelTitle}
                        effect='blur'
                    />
                </NavLink>
            }

            {!vertical &&
                <>
                    <NavLink to={`/channel/${channelId}`} className={styles.channel__title}>
                        {decode(channelTitle)}
                    </NavLink>

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