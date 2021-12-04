import classNames from 'classnames';
import styles from './EndScroll.module.scss'

const EndScroll = ({ small }) => {
    
    const boxClasses = classNames(
        styles.end,
        {
            [styles.small]: small
        }
    );

    return (
        <div className={boxClasses}>
            <h2 className={styles.end__title}>Yay! You have seen it all</h2>
        </div>
    );
}

export default EndScroll;