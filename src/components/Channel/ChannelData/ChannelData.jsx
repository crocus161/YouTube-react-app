import { useState } from 'react';
import styles from './ChannelData.module.scss';
import numbersFormat from '../../../utils/numbersFormat';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ChannelDataSkeleton from '../../../common/Skeletons/ChannelDataSkeleton/ChannelDataSkeleton';

const ChannelData = ({ channelId, setChannelData, data }) => {
    const {snippet, statistics, loading} = data;

    useState(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {
            setChannelData(channelId);
        }

        return () => cleanupFunction = true;
    }, [setChannelData])

    if(loading) {
        return <ChannelDataSkeleton />
    }

    return (
        <div className={styles.info}>

            <div className={styles.meta}>
                <LazyLoadImage
                    src={snippet?.thumbnails?.default?.url}
                    className={styles.channel__ava}
                    alt={snippet?.title}
                    effect='blur'
                />

                <div className={styles.statistics}>
                    <h2>{snippet?.title}</h2>
                    <p>{numbersFormat(statistics?.subscriberCount)} subscribers</p>
                </div>
            </div>

            <button className={styles.subscribe}>Subscribe</button>
        </div>
    );
}

export default ChannelData;

