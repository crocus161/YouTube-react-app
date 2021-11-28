import styles from './EndScroll.module.scss'

const EndScroll = ({ small }) => {
    return (
        <div className={`${styles.end} ${small ? styles.small : ''}`}>
            <h2 className={styles.end__title}>Yay! You have seen it all</h2>
        </div>
    );
}

export default EndScroll;