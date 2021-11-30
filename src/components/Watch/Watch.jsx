import WatchCurrentContainer from '../../containers/WatchCurrentContainer';
import WatchRelatedContainer from '../../containers/WatchRelatedContainer';
import { WATCH } from '../../routes/consts';
import styles from './Watch.module.scss';
import { useMatch } from 'react-router';

const Watch = () => {
    const {params: { videoId }} = useMatch(`${WATCH}/:videoId`);
    
    return (
        <div className={styles.watch} id='watch'>
            <WatchCurrentContainer videoId={videoId} />
            <WatchRelatedContainer videoId={videoId} />
        </div>
    );
}

export default Watch;