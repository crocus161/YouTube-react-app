import styles from './Description.module.scss';
import he from 'he';
import { useState } from 'react';

const Description = ({description}) => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <div className={`${styles.description} ${showMore ? styles.active__description : ''}`}>
            <p>
                {description ? he.decode(description) : null}
            </p>

            <button onClick={handleShowMore}>
                {showMore ? 'Show less' : 'Show more'}
            </button>
        </div>
    );
}

export default Description;