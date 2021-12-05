import { useEffect } from 'react';
import classNames from 'classnames';
import styles from './ChannelData.module.scss';
import numbersFormat from '../../../utils/numbersFormat';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ChannelDataSkeleton from '../../../common/Skeletons/ChannelDataSkeleton/ChannelDataSkeleton';

const ChannelData = ({ channelId, setChannelData, data, setSubsStatus, subStatus, isAuth, setSubscribe, outSubscribe}) => {
    const {snippet, statistics, loading} = data;

    const subsBtnClasses = classNames(
        styles.subscribe,
        {
            [styles.subscribe__active]: subStatus
        }
    )

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) setChannelData(channelId);

        return () => cleanupFunction = true;
    }, [setChannelData, channelId]);

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction && isAuth) setSubsStatus(channelId);

        return () => cleanupFunction = true;
    }, [isAuth, setSubsStatus, channelId]);


    const handleSubscribe = () => {
        setSubscribe(channelId);
    }

    const handleOutSubscribe = () => {
        outSubscribe();
    }

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

            <button
                disabled={!isAuth}
                className={subsBtnClasses}
                onClick={!subStatus ? handleSubscribe : handleOutSubscribe}
            >
                {!subStatus ? 'Subscribe' : 'Refuse'}
            </button>
        </div>
    );
}

export default ChannelData;

