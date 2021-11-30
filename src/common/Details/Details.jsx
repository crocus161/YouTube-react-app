import React, { useEffect, useState } from 'react';
import styles from './Details.module.scss';

const Details = ({ children }) => {

    const text = React.createRef();
    const [showMore, setShowMore] = useState(false);
    const [isOverflowed, setIsOverflowed] = useState(false);


    useEffect(() => {
        setIsOverflowed(isOverflowedFunc(text.current));
    }, []);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    const isOverflowedFunc = el => el.scrollWidth > el.offsetWidth || el.scrollHeight > el.offsetHeight;

    return (
        <div className={`${styles.details} ${showMore ? styles.active : ''}`}>
            <p ref={text}>{children}</p>


            {
                isOverflowed &&
                <button onClick={handleShowMore}>
                    {showMore ? 'Show less' : 'Show more'}
                </button>
            }
        </div>
    );
}

export default Details;