import React, { useEffect } from 'react';
import styles from './CardsBox.module.scss';
import Card from '../Card/Card';
import InfiniteBox from '../InfiniteBox/InfiniteBox';
import CardsSkeleton from '../Skeletons/CardSkeleton/CardsSkeleton'
import classNames from 'classnames';

const CardsBox = (props) => {

    const scrollBlock = React.createRef();
    const boxClasses = classNames(
        styles.box,
        {
            [styles.small]: props.small
        }
    );

    useEffect(() => {
        let cleanupFunction = false;

        if (props.moveUp && !cleanupFunction) {
            scrollBlock.current.scrollTop = 0;
            props.setMoveUp();
        }

        return () => cleanupFunction = true;
    });

    return (
        <div id="scrollableDiv" className={boxClasses} ref={scrollBlock}>

            <h1 className={styles.box__title}>{props.title}</h1>

            <InfiniteBox
                listLength={props.listLength}
                totalResults={props.totalResults}
                fetchMoreData={props.fetchMoreData}
                scrollableTarget="scrollableDiv"
            >
                {
                    props.loading

                    ? [...Array(24)].map((_, i) => (
                        <CardsSkeleton key={i} small={props.small} vertical={props.vertical} />
                    ))

                    : props.items.map((item, i) => (
                        <Card key={i} data={item} small={props.small} vertical={props.vertical} />
                    ))
                    
                }
            </InfiniteBox>
        </div>
    );
}

export default CardsBox;