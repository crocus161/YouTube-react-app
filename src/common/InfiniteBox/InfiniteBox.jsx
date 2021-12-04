import classNames from 'classnames';
import styles from './InfiniteBox.module.scss';
import EndScroll from '../EndScroll/EndScroll';
import ScrollLoader from '../ScrollLoader/ScrollLoader';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteBox = ({listLength, totalResults, fetchMoreData, small, children, scrollableTarget}) => {

    const boxClasses = classNames(
        styles.box,
        {
            [styles.small]: small
        }
    );

    return (
        <InfiniteScroll
            next={fetchMoreData}
            className={boxClasses}
            dataLength={listLength}
            loader={<ScrollLoader />}
            style={{ overflow: 'hidden' }}
            scrollableTarget={scrollableTarget}
            endMessage={<EndScroll small={small} />}
            hasMore={!totalResults ? true : totalResults > listLength}
        >
            {children}
        </InfiniteScroll>
    );
}

export default InfiniteBox;