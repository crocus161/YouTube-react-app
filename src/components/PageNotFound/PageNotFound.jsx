import styles from './PageNotFound.module.scss';
import PageNotFoundIcon from '../../assets/icons/page-not-found.svg?react';

const PageNotFound = () => {
    return (
        <div className={styles.box}>
            <PageNotFoundIcon />
        </div>
    );
}

export default PageNotFound;