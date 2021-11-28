import styles from './CardsBox.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useEffect } from 'react';
import ScrollLoader from '../ScrollLoader/ScrollLoader';
import EndScroll from '../EndScroll/EndScroll';

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

            <InfiniteScroll
                dataLength={listLength}
                hasMore={!totalResults ? true : totalResults > listLength}
                next={fetchMoreData}
                scrollableTarget="scrollableDiv"
                loader={<ScrollLoader />}
                endMessage={<EndScroll small={small}/>}
                className={styles.box__list}
                style={{overflow: 'hidden'}}
            >
                {children}
            </InfiniteScroll>

        </div>
    );
}

export default CardsBox;