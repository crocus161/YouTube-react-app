import moment from 'moment';
import styles from '../Card.module.scss';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cardsApi } from '../../../api/cardApi';
import { decode } from '../../../utils/stringFormat';
import numbersFormat from '../../../utils/numbersFormat';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CardInfo = ({channelTitle, channelId, published, viewCount, vertical, isChannel}) => {
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

            {
                channelIcon && !isChannel

                ? <NavLink to={`/channel/${channelId}`} className={styles.card__icon} >
                    <LazyLoadImage
                        src={channelIcon}
                        alt={channelTitle}
                        effect='blur'
                    />
                </NavLink>

                : null
            }

            {
                !vertical && !isChannel
                
                ? <>
                    <NavLink to={`/channel/${channelId}`} className={styles.channel__title}>
                        {decode(channelTitle)}
                    </NavLink>

                    <p className={styles.views__count}>
                        {`${numbersFormat(viewCount)} views`}
                    </p>
                </>
                
                : null
            }

            <p className={styles.publishing__date}>
                {moment(published).fromNow()}
            </p>

        </div>
    );
}

export default CardInfo