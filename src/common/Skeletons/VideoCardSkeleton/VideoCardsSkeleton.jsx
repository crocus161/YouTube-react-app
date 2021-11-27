import styles from './VideoCardsSkeletons.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const VideoCardsSkeleton = ({ vertical, small }) => {

    if (vertical) {
        return (
            <SkeletonTheme baseColor='#343a40' color='#343a40' highlightColor='#3c4147' borderRadius={10}>
                <div className={`${styles.vertical__wrapper} ${small ? styles.small : ''}`}>
                    <Skeleton height={small ? 120 : 175}></Skeleton>
                    <Skeleton height={small ? 48 : 55}></Skeleton>
                    <div className={styles.vertical__line}>
                        <Skeleton width={35} height={35} circle></Skeleton>
                        <div className={styles.vertical__time}>
                            <Skeleton height={35}></Skeleton>
                        </div>
                    </div>
                    {!small && <Skeleton height={25}></Skeleton>}
                </div>
            </SkeletonTheme>
        )
    }

    return (
        <SkeletonTheme baseColor='#343a40' color='#343a40' highlightColor='#3c4147'>
            <div className={`${styles.horizontal__wrapper} ${small ? styles.small : ''}`}>
                <Skeleton width={300} height={180} borderRadius={10}></Skeleton>
                <div className={styles.horizontal__meta}>
                    <Skeleton height={45}></Skeleton>
                    <div className={styles.horizontal__info}>
                        <Skeleton width={35} height={35} circle></Skeleton>

                        <div className={styles.horizontal__lines}>
                            <Skeleton width={150} height={30}></Skeleton>
                            <Skeleton width={100} height={30}></Skeleton>

                            <div className={styles.horizontal__line}>
                                <Skeleton height={30}></Skeleton>
                            </div>
                        </div>
                    </div>
                    <Skeleton height={65}></Skeleton>
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default VideoCardsSkeleton;