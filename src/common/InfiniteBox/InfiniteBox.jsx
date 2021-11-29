import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollLoader from '../ScrollLoader/ScrollLoader';
import EndScroll from '../EndScroll/EndScroll';
import styles from './InfiniteBox.module.scss'

const InfiniteBox = ({listLength, totalResults, fetchMoreData, small, children, scrollableTarget}) => {
    return (
        <InfiniteScroll
            hasMore={!totalResults ? true : totalResults > listLength}
            className={`${styles.box} ${small ? styles.small : ''}`}
            endMessage={<EndScroll small={small} />}
            scrollableTarget={scrollableTarget}
            style={{ overflow: 'hidden' }}
            loader={<ScrollLoader />}
            dataLength={listLength}
            next={fetchMoreData}
        >
            {children}
        </InfiniteScroll>
    );
}

export default InfiniteBox;