import moment from 'moment';
import styles from './Comment.module.scss';
import { parseHtml } from '../../../../../utils/stringFormat';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Comment = ({ data, replies }) => {

    const {topLevelComment: {snippet}, totalReplyCount} = data;

    const isUpdate = snippet?.publishedAt === snippet?.updatedAt;


    return (
        <div className={styles.comment}>

            <div className={styles.ava}>
                <LazyLoadImage 
                    src={snippet?.authorProfileImageUrl}
                    alt={snippet?.authorDisplayName}
                    effect='blur'
                />
            </div>

            <div className="main">

                <div className={styles.meta}>
                    <h3 className={styles.author__name}>{snippet?.authorDisplayName}</h3>
                    <p>
                        <span className="publish__time">
                            {moment(snippet?.publishedAt).fromNow()}
                        </span>

                        {
                            !isUpdate 
                                ? <span className="edit__mark">(edited)</span> 
                                : null
                        }
                    </p>
                </div>

                <div className="text">
                    <p>{parseHtml(snippet?.textDisplay)}</p>
                </div>

                <div className="statistics"></div>
            </div>
        </div>
    );
}

export default Comment