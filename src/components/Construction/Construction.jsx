import styles from './Construction.module.scss';
import {ReactComponent as ConstructionIcon} from '../../assets/icons/construction.svg';

const Construction = () => {
    return (
        <div className={styles.box}>
            <ConstructionIcon />
        </div>
    );
}

export default Construction