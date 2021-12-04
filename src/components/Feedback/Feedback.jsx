import React from 'react';
import Input from './Input/Input';
import styles from './Feedback.module.scss';

const Feedback = ({feedback, sendFeedback, userName, isAuth}) => {

    const submitFeedback = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const message = form.message.value;
            
        sendFeedback(`${name}%0A${phone}%0A${message}`)
    }

    return (
        <div className={styles.form__wrapper}>

            <form 
                onSubmit={submitFeedback}
                className={styles.form} 
            >

                <h2 className={styles.title}>Feedback form</h2>

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Contacts</legend>

                    <Input label='Your name' id='name' name='name' defaultText={userName}/>
                    <Input label='Your phone' id='phone' name='phone' type='tel'/>
                </fieldset>

                <textarea
                    required
                    name='message' 
                    className={styles.textarea} 
                    placeholder='Type your message here'
                />

                <button className={styles.button}>Submit</button>
            </form>

        </div>
    )
}

export default Feedback
