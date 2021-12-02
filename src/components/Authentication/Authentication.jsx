import styles from './Authentication.module.scss';
import {ReactComponent as AuthIcon} from '../../assets/icons/authentication.svg';

const Authentication = () => {
    return (
        <div className={styles.auth}>
            <h2 className={styles.auth__title}>Authentication required</h2>
            <AuthIcon />
        </div>
    );
}

export default Authentication;