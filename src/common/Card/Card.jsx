import classNames from 'classnames';
import styles from './Card.module.scss';
import CardBody from './CardBody/CardBody';
import { NavLink } from 'react-router-dom';
import { WATCH } from '../../routes/consts';
import { CHANNEL } from '../../routes/consts';
import CardHeader from './CardHeader/CardHeader';

const Card = ({ data, vertical, small }) => {

    const { snippet, contentDetails, statistics } = data;

    const videoId = data.id?.videoId || data.contentDetails?.videoId || data.id;
    const channelId = snippet?.resourceId ? snippet?.resourceId.channelId : snippet?.channelId;
    
    const isChannelCard = data.id?.kind === 'youtube#channel' || data.kind === 'youtube#subscription';
    const to = isChannelCard ? `${CHANNEL}/${channelId}` : `${WATCH}/${videoId}`;

    const cardClasses = classNames(
        styles.card, 
        {
            [styles.small]: small,
            [styles.vertical]: vertical,
            [styles.horizontal]: !vertical,
            [styles.channel]: isChannelCard,
        }
    )

    return (
        <div className={cardClasses}>

            <CardHeader 
                videoId={videoId}
                snippet={snippet}
                contentDetails={contentDetails}
            />

            <CardBody 
                to={to}
                snippet={snippet}
                vertical={vertical}
                statistics={statistics}
                isChannelCard={isChannelCard}
            />

            <NavLink to={to} className={styles.card__overlay} />
            
        </div>
    );
}

export default Card;