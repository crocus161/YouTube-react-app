import CustomTheme from '../CustomTheme';
import Skeleton from 'react-loading-skeleton';
import styles from './CurrentWatchSkeleton.module.scss';

const CurrentWatchSkeleton = () => {
    return (
        <CustomTheme>
            <div className={styles.wrapper}>
                <Skeleton height='70%'></Skeleton>
                <Skeleton height='50px'></Skeleton>

                <div className={styles.statistics}>
                    <Skeleton height='40px'></Skeleton>
                    <Skeleton height='40px'></Skeleton>
                    <Skeleton height='40px'></Skeleton>
                    <Skeleton height='40px'></Skeleton>
                    <Skeleton height='40px'></Skeleton>
                </div>

                <Skeleton height='70px'></Skeleton>
            </div>
        </CustomTheme>
    );
}

export default CurrentWatchSkeleton;