import {ReactComponent as WarningIcon} from '../../assets/icons/warning.svg';
import styles from './Error.module.scss';

const Error = () => {
    return (
        <div className={styles.error}>
            <WarningIcon />

            <div className={styles.hgroup}>
                <div className={styles.hgroup__line}>
                    <h2>Sorry...</h2>
                    <h2>It's not you.</h2>
                    <h2>It's us.</h2>
                </div>
                <p>We have already left to deal with your problem</p>
            </div>
        </div>
    );
}

export default Error;
