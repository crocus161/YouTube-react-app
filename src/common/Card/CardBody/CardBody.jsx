import React from 'react';
import CardInfo from './CardInfo';
import styles from '../Card.module.scss';
import { NavLink } from 'react-router-dom';
import { decode, fullStringFormat } from '../../../utils/stringFormat';

const CardBody = ({to, snippet, statistics, isChannelCard, vertical}) => {
    return (
        <div className={styles.card__meta}>

            <NavLink
                to={to}
                title={snippet?.title}
                className={styles.card__title}
            >
                {snippet?.title && decode(snippet?.title)}
            </NavLink>

            <CardInfo
                vertical={vertical}
                isChannel={isChannelCard}
                channelId={snippet?.channelId}
                published={snippet?.publishedAt}
                viewCount={statistics?.viewCount}
                channelTitle={snippet?.channelTitle}
            />

            <p className={styles.card__description}>
                {snippet?.description && fullStringFormat(snippet?.description)}
            </p>

        </div>
    )
}

export default CardBody
