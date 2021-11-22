import styles from './Trending.module.scss';
import { useEffect } from 'react';
import VideoCard from '../../common/VideoCard/VideoCard';

const Trending = ({trendingList, setTrendingData}) => {

    useEffect(() => {
        setTrendingData();
    }, []);

    return (
        <div className={styles.trending}>
            <h1 className={styles.trending__title}>Trending</h1>

            <div className={styles.trending__list}>
                {
                    trendingList.map(item => <VideoCard key={item.id} vertical={false} data={item} />)
                }
            </div>
        </div>
    );
}

export default Trending;