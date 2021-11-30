import moment from 'moment';
import styles from './Comment.module.scss';
import { parseHtml } from '../../../../../utils/stringFormat';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Details from '../../../../../common/Details/Details';
import { ReactComponent as LikeHeartIcon } from '../../../../../assets/icons/likes.svg';

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

                        {isUpdate && <span className="edit__mark"> (edited)</span> }
                    </p>
                </div>

                <Details>
                    {parseHtml(snippet?.textDisplay)}
                </Details>

                {snippet?.likeCount 
                    ? (
                        <div className={styles.likes}>
                            <LikeHeartIcon className={styles.likes__icon}/>
                            <p className={styles.likes__count}>{snippet?.likeCount}</p> 
                        </div>
                    )
                    : null
                }

            </div>
        </div>
    );
}

export default Comment