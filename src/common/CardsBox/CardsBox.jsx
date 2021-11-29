import React, { useEffect } from 'react';
import styles from './CardsBox.module.scss';
import InfiniteBox from '../InfiniteBox/InfiniteBox';

const CardsBox = ({ title, children, listLength, totalResults, fetchMoreData, moveUp, setMoveUp, small }) => {

    const scrollBlock = React.createRef();

    useEffect(() => {
        let cleanupFunction = false;

        if (moveUp && !cleanupFunction) {
            scrollBlock.current.scrollTop = 0;
            setMoveUp();
        }

        return () => cleanupFunction = true;
    });

    return (
        <div id="scrollableDiv" className={`${styles.box} ${small ? styles.small : ''}`} ref={scrollBlock}>

            <h1 className={styles.box__title}>
                {title}
            </h1>

            <InfiniteBox
                listLength={listLength}
                totalResults={totalResults}
                fetchMoreData={fetchMoreData}
                scrollableTarget="scrollableDiv"
            >
                {children}
            </InfiniteBox>
        </div>
    );
}

export default CardsBox;