import { useState } from 'react';
import styles from './Description.module.scss';
import { fullStringFormat } from '../../../../utils/stringFormat';

const Description = ({description}) => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <div className={`${styles.description} ${showMore ? styles.active__description : ''}`}>
            <p>
                {description ? fullStringFormat(description) : null}
            </p>

            <button onClick={handleShowMore}>
                {showMore ? 'Show less' : 'Show more'}
            </button>
        </div>
    );
}

export default Description;