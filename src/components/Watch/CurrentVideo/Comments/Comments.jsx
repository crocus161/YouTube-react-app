import { useEffect } from 'react';
import Comment from './Comment/Comment';
import styles from './Comments.module.scss';

const Comments = ({videoId, setWatchComments, items}) => {

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            setWatchComments(videoId);
        }

        return () => cleanupFunction = true;
    }, [videoId, setWatchComments]);

    return (
        <div>
            <h2 className={styles.title}>Comments</h2>

            <div>
                {items.map(item => 
                    <Comment 
                        key={item.id} 
                        data={item.snippet}
                        replies={item.replies}
                    />
                )}
            </div>
        </div>
    );
}

export default Comments;