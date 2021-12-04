import classNames from 'classnames';
import styles from './Details.module.scss';
import React, { useEffect, useState } from 'react';

const Details = ({ children }) => {

    const text = React.createRef();
    const [showMore, setShowMore] = useState(false);
    const [isOverflowed, setIsOverflowed] = useState(false);
    const detailsClasses = classNames(
        styles.details,
        {
            [styles.active]: showMore
        }
    )

    useEffect(() => {
        setIsOverflowed(isOverflowedFunc(text.current));
    }, []);

    const isOverflowedFunc = el => el.scrollWidth > el.offsetWidth || el.scrollHeight > el.offsetHeight;

    return (
        <div className={detailsClasses}>
            <p ref={text}>{children}</p>

            {
                isOverflowed &&
                <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show less' : 'Show more'}
                </button>
            }
        </div>
    );
}

export default Details;