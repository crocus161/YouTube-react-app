import CustomTheme from '../CustomTheme';
import Skeleton from 'react-loading-skeleton';
import styles from './ChannelDataSkeleton.module.scss';

const ChannelDataSkeleton = () => { 
    return (
        <CustomTheme>
            <div className={styles.info}>

                <div className={styles.meta}>
                    <Skeleton width='70px' height='70px' circle></Skeleton>

                    <div className={styles.statistics}>
                        <Skeleton height='35px'></Skeleton>
                        <Skeleton height='25px'></Skeleton>
                    </div>
                </div>

                <Skeleton width='130px' height='45px'></Skeleton>
            </div>
        </CustomTheme>
    );
}

export default ChannelDataSkeleton;