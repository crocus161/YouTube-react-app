import { useEffect } from 'react';
import Comment from './Comment/Comment';
import styles from './Comments.module.scss';
import InfiniteBox from '../../../../common/InfiniteBox/InfiniteBox';
import Error from '../../../Error/Error';

const Comments = ({videoId, setWatchComments, setMoreWatchComments, items, error}) => {

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            setWatchComments(videoId);
        }

        return () => cleanupFunction = true;
    }, [videoId, setWatchComments]);

    if(error) {
        return (
            <div>
                <h2 className={styles.title}>Comments isn't working now</h2>
                <Error />
            </div>
        );
    }

    return (
        <div>
            <h2 className={styles.title}>Comments</h2>

            <InfiniteBox
                fetchMoreData={setMoreWatchComments}
                totalResults={100000000}
                scrollableTarget='watch'
                listLength={items.length}
                small={false}
            >
                {items.map(item => 
                    <Comment 
                        key={item.id} 
                        data={item.snippet}
                        replies={item.replies}
                    />
                )}
            </InfiniteBox>
        </div>
    );
}

export default Comments;