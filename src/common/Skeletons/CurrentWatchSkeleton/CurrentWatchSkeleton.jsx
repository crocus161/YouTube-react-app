import styles from './CurrentWatchSkeleton.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CurrentWatchSkeleton = () => {
    return (
        <SkeletonTheme baseColor='#343a40' color='#343a40' highlightColor='#3c4147' borderRadius={10}>
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
        </SkeletonTheme>
    );
}

export default CurrentWatchSkeleton;