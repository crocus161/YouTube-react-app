import styles from './PageNotFound.module.scss';
import {ReactComponent as PageNotFoundIcon} from '../../assets/icons/page-not-found.svg';

const PageNotFound = () => {
    return (
        <div className={styles.box}>
            <PageNotFoundIcon />
        </div>
    );
}

export default PageNotFound;