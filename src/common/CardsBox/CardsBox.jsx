import styles from './CardsBox.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useEffect } from 'react';

const CardsBox = ({ title, children, listLength, fetchMoreData, moveUp, setMoveUp }) => {

    const scrollBlock = React.createRef();

    useEffect(() => {
        if(moveUp) {
            scrollBlock.current.scrollTop = 0;
            setMoveUp();
        }
    });

    return (
        <div id="scrollableDiv" className={styles.box} ref={scrollBlock}>

            <h1 className={styles.box__title}>
                {title}
            </h1>

            <InfiniteScroll
                initialScrollY={0}
                dataLength={listLength}
                hasMore={true}
                next={fetchMoreData}
                scrollableTarget="scrollableDiv"
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                className={styles.box__list}
                >
                {children}
            </InfiniteScroll>
            
        </div>
    );
}

export default CardsBox;