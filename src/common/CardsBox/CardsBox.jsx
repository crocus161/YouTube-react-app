import React, { useEffect } from 'react';
import styles from './CardsBox.module.scss';
import VideoCard from '../VideoCard/VideoCard';
import InfiniteBox from '../InfiniteBox/InfiniteBox';
import VideoCardsSkeleton from '../Skeletons/VideoCardSkeleton/VideoCardsSkeleton'

const CardsBox = (props) => {

    const scrollBlock = React.createRef();

    useEffect(() => {
        let cleanupFunction = false;

        if (props.moveUp && !cleanupFunction) {
            scrollBlock.current.scrollTop = 0;
            props.setMoveUp();
        }

        return () => cleanupFunction = true;
    });

    return (
        <div id="scrollableDiv" className={`${styles.box} ${props.small ? styles.small : ''}`} ref={scrollBlock}>

            <h1 className={styles.box__title}>
                {props.title}
            </h1>

            <InfiniteBox
                listLength={props.listLength}
                totalResults={props.totalResults}
                fetchMoreData={props.fetchMoreData}
                scrollableTarget="scrollableDiv"
            >
                {props.loading
                    ? [...Array(24)].map((_, i) => (
                        <VideoCardsSkeleton 
                            key={i} 
                            small={props.small}
                            vertical={props.vertical} 
                        />
                    ))
                    : props.items.map((item, i) => (
                        <VideoCard 
                            key={i} 
                            data={item} 
                            small={props.small}
                            vertical={props.vertical} 
                        />
                    ))
                }
            </InfiniteBox>
        </div>
    );
}

export default CardsBox;