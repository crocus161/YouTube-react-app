import { useEffect, useState } from 'react';
import styles from './CommentsForm.module.scss';

const CommentForm = ({videoId, error, isAuth, setNewComment}) => {

    const [comment, setComment] = useState('');

    useEffect(() => {
        if(error) setComment('Oops, try again please');
    }, [error])

    const submitHandle = (e) => {
        e.preventDefault();
        setNewComment(videoId, comment);
        setComment('');
    }

    return (
        <form 
            onSubmit={submitHandle}
            className={styles.form}
        >

            <textarea
                value={comment}
                disabled={!isAuth}
                className={styles.field}
                placeholder='Your comment here'
                onChange={e => setComment(e.target.value)}
            />

            <button 
                disabled={!isAuth}
                className={styles.button}
            >
                Submit
            </button>

        </form>
    );
}

export default CommentForm;