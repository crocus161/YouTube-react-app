import React, { useEffect, useState } from 'react';
import Input from '../../common/Input/Input';
import styles from './Feedback.module.scss';

const Feedback = ({ errorStatus, sendFeedback, userName, isAuth }) => {

    const [isSend, setIsSend] = useState(false);
    const [formTitle, setFormTitle] = useState('Feedback form');
    const [nameAutocomplete, setNameAutocomplete] = useState('');
    const [message, setMessage] = useState('');

    const submitFeedback = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;

        sendFeedback(`${name}%0A${phone}%0A${message}`);

        setIsSend(true);
        setMessage('');
    }

    const changeMessage = (e) => {
        setMessage(e.target.value);
    }

    useEffect(() => {

        let timeout;

        if(isSend) {
            !errorStatus 
                ? setFormTitle('Feedback was sent!')
                : setFormTitle('Feedback wasn\'t sent! Please, try again')
            
                timeout = setTimeout(() => {
                    setFormTitle('Feedback form');
                }, 2000);
        }

        if(isAuth) setNameAutocomplete(userName);

        return () => { clearTimeout(timeout) }
    }, [isSend, isAuth, errorStatus, userName])

    return (
        <div className={styles.form__wrapper}>

            <form
                onSubmit={submitFeedback}
                className={styles.form}
            >

                <h2 className={styles.title}>{formTitle}</h2>

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Contacts</legend>

                    <Input label='Your name' id='name' name='name' defaultText={nameAutocomplete} />
                    <Input label='Your phone' id='phone' name='phone' type='tel' />
                </fieldset>

                <textarea
                    required
                    name='message'
                    value={message} 
                    onChange={changeMessage}
                    className={styles.textarea}
                    placeholder='Type your message here'
                />

                <button className={styles.button}>Submit</button>
            </form>

        </div>
    )
}

export default Feedback
